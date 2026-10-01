import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PlusIcon } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { WhaleDoodle } from './Doodles';
import { faqCategories } from '../data/faq';

export function Faq() {
  const [activeId, setActiveId] = useState(faqCategories[0].id);
  const [openId, setOpenId] = useState<string | null>(faqCategories[0].items[0].id);

  const active = faqCategories.find((category) => category.id === activeId) ?? faqCategories[0];

  const selectCategory = (id: string) => {
    const category = faqCategories.find((item) => item.id === id);
    setActiveId(id);
    setOpenId(category ? category.items[0].id : null);
  };

  return (
    <section id="faq" aria-labelledby="faq-titre" className="relative overflow-hidden bg-sand">
      <WhaleDoodle className="pointer-events-none absolute -right-8 top-24 hidden h-60 w-60 rotate-[9deg] text-marine/[0.08] lg:block xl:right-0 xl:h-72 xl:w-72" />

      <div className="relative mx-auto max-w-shell px-5 py-14 lg:px-8 lg:py-16">
        <SectionHeading
          id="faq-titre"
          doodle={WhaleDoodle}
          title="Questions fréquentes"
          description="Quatre thèmes, les réponses aux questions que les parents nous posent le plus souvent." />
        

        <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Thèmes de la foire aux questions">
          {faqCategories.map((category) => {
            const isActive = category.id === active.id;
            return (
              <button
                key={category.id}
                type="button"
                role="tab"
                id={`onglet-${category.id}`}
                aria-selected={isActive}
                aria-controls={`liste-${category.id}`}
                onClick={() => selectCategory(category.id)}
                className={`rounded-full border px-4 py-2 text-[14.5px] font-semibold transition-colors duration-150 ease-out ${
                isActive ?
                'border-marine bg-marine text-sand' :
                'border-line bg-white text-marine-soft hover:border-sea/40 hover:text-marine'}`
                }>
                
                {category.label}
                <span className={`ml-2 text-[13px] font-medium ${isActive ? 'text-sand/60' : 'text-marine-faint'}`}>
                  {category.items.length}
                </span>
              </button>);

          })}
        </div>

        <ul
          id={`liste-${active.id}`}
          role="tabpanel"
          aria-labelledby={`onglet-${active.id}`}
          className="mt-6 max-w-[74ch] border-t border-line">
          
          {active.items.map((item) => {
            const isOpen = openId === item.id;
            return (
              <li key={item.id} className="border-b border-line">
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-${item.id}`}
                    className="flex w-full items-start gap-4 py-4 text-left">
                    
                    <span className="flex-1 text-[16.5px] font-semibold leading-snug text-marine">
                      {item.question}
                    </span>
                    <motion.span
                      aria-hidden="true"
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
                      className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-sea/30 text-sea">
                      
                      <PlusIcon className="h-3.5 w-3.5" />
                    </motion.span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen &&
                  <motion.div
                    id={`faq-${item.id}`}
                    key="panneau"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
                    className="overflow-hidden">
                    
                      <p className="max-w-[66ch] pb-5 pr-10 text-[15.5px] leading-relaxed text-marine-soft">
                        {item.answer}
                      </p>
                    </motion.div>
                  }
                </AnimatePresence>
              </li>);

          })}
        </ul>
      </div>
    </section>);

}