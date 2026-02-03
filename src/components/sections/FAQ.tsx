import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const questions = [
    {
      question: "O Xô Xixi mancha o piso ou tapete?",
      answer: "Não! Nossa fórmula foi desenvolvida para ser segura em qualquer superfície, incluindo porcelanato, madeira, laminado e tecidos. Ele não contém corantes agressivos.",
    },
    {
      question: "Faz mal para o meu cachorro ou gato?",
      answer: "De jeito nenhum. O produto é atóxico. Claro, recomendamos não deixar o pet ingerir o pó, mas o contato com as patas é totalmente seguro.",
    },
    {
      question: "Quanto tempo dura um frasco de 250g?",
      answer: "Depende do porte do seu pet e da frequência. Para um cachorro de porte pequeno/médio, um frasco costuma render cerca de 50 a 60 aplicações.",
    },
    {
      question: "Onde devo descartar o produto depois de varrer?",
      answer: "Você pode descartar no lixo comum (orgânico). O produto encapsula o líquido e o odor, então não vai deixar cheiro na sua lixeira.",
    },
    {
      question: "Tira cheiro de xixi velho?",
      answer: "Sim! Para xixis mais antigos que já secaram, recomendamos umedecer levemente o local com um pouco de água antes de aplicar o pó para que ele possa absorver o resíduo.",
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 max-w-3xl">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4">
            Dúvidas Frequentes
          </h2>
          <p className="text-slate-600">
            Tudo o que você precisa saber sobre o <span className="font-bold text-orange-600">Xô Xixi</span>.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8">
          <Accordion type="single" collapsible className="w-full">
            {questions.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b-slate-100 last:border-0">
                <AccordionTrigger className="text-left font-bold text-slate-800 hover:text-orange-600 text-lg py-4">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed text-base pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

      </div>
    </section>
  );
}