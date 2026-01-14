import { Sparkles, Clock, Trash2 } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: Sparkles,
      title: "1. Aplique o Xô Xixi",
      description: "Cubra todo o xixi com o pó. Não precisa economizar, ele age instantaneamente encapsulando o odor.",
    },
    {
      icon: Clock,
      title: "2. Aguarde secar",
      description: "A mágica acontece em segundos! O xixi se transforma em um pó seco, avisando que está pronto.",
    },
    {
      icon: Trash2,
      title: "3. Varra e descarte",
      description: "Agora é só varrer ou aspirar. Jogue no lixo comum ou no vaso sanitário. Sem pano sujo e sem nojo!",
    },
  ];

  return (
    <section id="como-funciona" className="py-12 lg:py-20 bg-slate-100 relative overflow-hidden">
      
      {/* Padrão de Pontinhos (Background Pattern) */}
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }} 
      />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-black text-orange-600 uppercase tracking-widest mb-3 bg-orange-100 inline-block px-3 py-1 rounded-full">
            Simples assim
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Limpeza completa em <span className="text-orange-600 underline decoration-orange-300 decoration-4 underline-offset-4">3 passos</span>
          </h3>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            Esqueça o balde, o pano de chão e o desinfetante. 
            <br className="hidden md:block" />
            Veja como é fácil manter sua casa limpa.
          </p>
        </div>

        {/* Grid de Cards */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          
          {/* Linha Conectora (Fundo) */}
          <div className="hidden md:block absolute top-16 left-[16%] right-[16%] h-1 bg-gradient-to-r from-slate-200 via-orange-300 to-slate-200 -z-10" />

          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative bg-white rounded-3xl p-8 border-2 border-slate-200 shadow-lg hover:shadow-2xl hover:shadow-orange-500/10 hover:border-orange-400 hover:-translate-y-2 transition-all duration-300 group flex flex-col items-center"
            >
              {/* Ícone com Círculo */}
              <div className="w-20 h-20 bg-orange-50 border-2 border-orange-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:border-orange-600 group-hover:scale-110 transition-all duration-300 shadow-sm relative z-10">
                <step.icon className="w-9 h-9 text-orange-600 group-hover:text-white transition-colors" />
              </div>

              <h4 className="text-2xl font-bold text-slate-900 mb-4 text-center">
                {step.title}
              </h4>
              <p className="text-slate-600 text-center leading-relaxed text-base">
                {step.description}
              </p>

              {/* Número de Fundo */}
              <span className="absolute -top-2 right-6 text-[8rem] font-black text-slate-100 -z-0 select-none opacity-80 group-hover:text-orange-50 transition-colors leading-none">
                {index + 1}
              </span>
            </div>
          ))}
        </div>

        {/* REMOVIDO: Box de "Funciona em qualquer superfície" foi retirado daqui. */}

      </div>
    </section>
  );
}