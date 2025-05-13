
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAnimationConfig } from '../hooks/use-animation';

// Simulated mood data for the chart
const initialMoodData = [
  { day: 'Mon', value: 3, label: 'Neutral' },
  { day: 'Tue', value: 4, label: 'Good' },
  { day: 'Wed', value: 2, label: 'Sad' },
  { day: 'Thu', value: 5, label: 'Great' },
  { day: 'Fri', value: 4, label: 'Good' },
  { day: 'Sat', value: 3, label: 'Neutral' },
  { day: 'Sun', value: 5, label: 'Great' },
];

const moodLabels = ['Very Sad', 'Sad', 'Neutral', 'Good', 'Great'];

const MoodTrendDemo = () => {
  const { transition } = useAnimationConfig();
  const [activeDay, setActiveDay] = useState<number | null>(null);
  const [moodData, setMoodData] = useState(initialMoodData);
  
  // Simulated mood update every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setMoodData(data => 
        data.map((day, idx) => ({
          ...day,
          value: Math.max(1, Math.min(5, day.value + Math.floor(Math.random() * 3) - 1)),
        }))
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="demo" className="py-20 md:py-32 bg-fg/5">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={transition}
        >
          <h2 className="text-3xl md:text-4xl font-inter-tight font-bold mb-4">
            Understand your <span className="text-accent">emotional patterns</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-fg/70">
            JournAI analyzes your entries to reveal mood trends over time,
            helping you gain insight into what affects your wellbeing.
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/50 dark:bg-black/20 rounded-lg p-6 shadow-default-light dark:shadow-default-dark border border-fg/10">
            <h3 className="text-xl font-inter-tight font-bold mb-6">Your Weekly Mood Tracker</h3>
            
            <div className="relative h-64">
              {/* Y-axis labels */}
              <div className="absolute left-0 top-0 bottom-0 w-16 flex flex-col justify-between text-xs text-fg/50">
                {moodLabels.reverse().map((label, i) => (
                  <div key={i} className="flex items-center">
                    <span>{label}</span>
                  </div>
                ))}
              </div>
              
              {/* Chart area */}
              <div className="absolute left-16 right-0 top-0 bottom-0">
                {/* Grid lines */}
                {[0, 1, 2, 3, 4].map((i) => (
                  <div 
                    key={i} 
                    className="absolute left-0 right-0 border-t border-fg/10"
                    style={{ top: `${i * 25}%` }}
                  ></div>
                ))}
                
                {/* Mood line graph */}
                <svg className="w-full h-full" viewBox="0 0 700 200" preserveAspectRatio="none">
                  {/* Line */}
                  <motion.path
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    d={`M${moodData.map((d, i) => `${i * (700 / (moodData.length - 1))},${200 - (d.value - 1) * (200 / 4)}`).join(' L')}`}
                    fill="none"
                    stroke="#6E56CF"
                    strokeWidth="3"
                  />
                </svg>
                
                {/* Data points */}
                <div className="absolute inset-0 flex items-end">
                  <div className="w-full flex justify-between items-end">
                    {moodData.map((day, i) => (
                      <div
                        key={i}
                        className="relative flex flex-col items-center"
                        style={{ height: '100%' }}
                      >
                        {/* Interactive bubble */}
                        <motion.div
                          className={`w-4 h-4 rounded-full cursor-pointer z-10 ${
                            activeDay === i ? 'bg-accent scale-150' : 'bg-accent/70'
                          }`}
                          style={{
                            marginBottom: `calc(${(day.value - 1) * 25}% - 8px)`,
                          }}
                          whileHover={{ scale: 1.5 }}
                          onClick={() => setActiveDay(activeDay === i ? null : i)}
                        />
                        
                        {/* Bubble label */}
                        {activeDay === i && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="absolute bottom-6 bg-accent text-white rounded-lg px-3 py-2 text-sm"
                          >
                            <div className="font-semibold">{day.day}: {day.label}</div>
                            <div className="text-xs">Tap to add note</div>
                          </motion.div>
                        )}
                        
                        {/* X-axis label */}
                        <div className="absolute bottom-0 transform translate-y-full pt-2 text-xs text-fg/50">
                          {day.day}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-fg/10">
              <div className="text-fg/70 text-sm">
                <p>Based on your entries, JournAI detected:</p>
                <ul className="mt-2 space-y-1">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-accent" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Higher mood on weekends and when mentioning "family"
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-accent" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Lower mood on Wednesdays and when discussing "meetings"
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoodTrendDemo;
