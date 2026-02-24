import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Waves, MapPin, Video, ArrowRight, CheckCircle, 
  Instagram, Mail, Send, BookOpen, Brain, Sparkles, 
  ChevronDown, ChevronUp, Lightbulb, Target, Calendar,
  X, Menu
} from 'lucide-react';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: '¿Cuánto dura un proceso terapéutico?',
      answer: 'La terapia sistémica breve se caracteriza por ser focalizada y orientada a objetivos concretos. La duración depende de la complejidad de cada situación y de tus necesidades. La frecuencia suele ser semanal o quincenal, y siempre vamos revisando el avance para ajustar el ritmo a tu proceso.'
    },
    {
      question: '¿Necesito tener un diagnóstico para consultar?',
      answer: 'No. Trabajo desde un enfoque no patologizante: no te defino por etiquetas diagnósticas. Me interesa entender tu situación, tus relaciones y lo que quieres cambiar. Si necesitas un informe clínico para coordinación con otros profesionales, lo puedo elaborar, pero siempre enfocado en la utilidad para ti.'
    },
    {
      question: '¿Qué pasa si no sé exactamente cuál es mi problema?',
      answer: 'Es completamente normal. Muchas personas llegan con una sensación de malestar difuso: "algo no está bien, pero no sé qué". En la primera sesión exploramos juntos tu situación, identificamos patrones y definimos juntos los objetivos. No necesitas tenerlo todo claro para empezar.'
    },
    {
      question: '¿La terapia sistémica tiene respaldo científico?',
      answer: 'Sí. La terapia sistémica breve, especialmente la centrada en soluciones (SFBT), ha demostrado su eficacia en múltiples meta-análisis. Investigaciones recientes (2024-2025) confirman su efectividad para trastornos de ansiedad, depresión, problemas relacionales y más. Es considerada una terapia basada en evidencia por organizaciones internacionales.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 rounded-xl hover:bg-white/10 transition-colors"
                aria-label="Abrir menú"
              >
                <Waves className={`h-6 w-6 transition-colors ${
                  scrolled ? 'text-[#2B5F7A]' : 'text-white'
                }`} />
              </button>
              <span className={`font-semibold text-lg ${scrolled ? 'text-gray-900' : 'text-white'}`}>
                Psicólogo Alonso Mancilla
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              {['Inicio', 'Sobre mí', 'Enfoque', 'Evidencia', 'El Espacio', 'Contacto'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className={`text-sm font-medium transition-colors hover:opacity-80 ${
                    scrolled ? 'text-gray-700' : 'text-white/90'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <Button 
              onClick={() => scrollToSection('agendar')}
              className="hidden sm:flex bg-[#2B5F7A] hover:bg-[#1E4A5F] text-white text-sm"
            >
              <Calendar className="mr-2 h-4 w-4" />
              Agendar
            </Button>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-xl hover:bg-white/10 transition-colors"
              aria-label="Abrir menú"
            >
              {menuOpen ? (
                <X className={`h-6 w-6 ${scrolled ? 'text-gray-900' : 'text-white'}`} />
              ) : (
                <Menu className={`h-6 w-6 ${scrolled ? 'text-gray-900' : 'text-white'}`} />
              )}
            </button>
          </div>
        </div>

        {/* Dropdown Menu */}
        <div className={`absolute top-full left-4 right-auto transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className={`${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-black/80 backdrop-blur-md'} rounded-2xl overflow-hidden w-64`}>
            <div className="p-4">
              <div className="grid gap-1">
                {[
                  { name: 'Inicio', id: 'inicio' },
                  { name: 'Sobre mí', id: 'sobre-mi' },
                  { name: 'Enfoque', id: 'enfoque' },
                  { name: 'Evidencia científica', id: 'evidencia' },
                  { name: 'El Espacio', id: 'el-espacio' },
                  { name: 'Agendar sesión', id: 'agendar', highlight: true },
                  { name: 'Contacto', id: 'contacto' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      scrollToSection(item.id);
                      setMenuOpen(false);
                    }}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all text-left text-sm ${
                      item.highlight 
                        ? 'bg-[#2B5F7A] text-white hover:bg-[#1E4A5F]' 
                        : scrolled 
                          ? 'text-gray-700 hover:bg-gray-100' 
                          : 'text-white hover:bg-white/10'
                    }`}
                  >
                    <span className={`font-medium ${item.highlight ? 'text-white' : ''}`}>
                      {item.name}
                    </span>
                    {item.highlight && (
                      <Calendar className="h-4 w-4" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src="/images/box-vista-mar.jpg"
            alt="Consulta con vista al mar"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <MapPin className="h-4 w-4 text-[#7EC8E3]" />
              <span className="text-white/90 text-sm">Valparaíso, Chile</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              PSICÓLOGO ALONSO MANCILLA
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
              Psicoterapia sistémica breve basada en evidencia. Un espacio seguro 
              para tu proceso de sanación y crecimiento personal.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('agendar')}
                size="lg"
                className="bg-[#2B5F7A] hover:bg-[#1E4A5F] text-white px-8"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Agenda tu sesión
              </Button>
              <Button 
                onClick={() => scrollToSection('enfoque')}
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 bg-transparent"
              >
                Conoce mi enfoque
              </Button>
            </div>
            
            <div className="mt-12 flex items-center gap-8 text-white/70">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-[#7EC8E3]" />
                <span className="text-sm">Atención presencial</span>
              </div>
              <div className="flex items-center gap-2">
                <Video className="h-5 w-5 text-[#7EC8E3]" />
                <span className="text-sm">Terapia online</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-[#7EC8E3]" />
                <span className="text-sm">Basada en evidencia</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre mí Section */}
      <section id="sobre-mi" className="py-20 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/alonso-perfil.jpg"
                  alt="Psicólogo Alonso Mancilla"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#2B5F7A] text-white p-6 rounded-2xl shadow-xl">
                <p className="text-3xl font-bold">+5</p>
                <p className="text-sm text-white/80">años de experiencia</p>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Sobre mí
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Soy psicólogo clínico con formación especializada en <strong>Terapia Sistémica Breve</strong>, 
                  un enfoque que garantiza un proceso ordenado y eficaz para cada persona que 
                  confía en mi acompañamiento terapéutico.
                </p>
                <p>
                  Mi trabajo se fundamenta en metodologías <strong>basadas en evidencia científica</strong>, 
                  combinando el enfoque sistémico con técnicas de imaginería terapéutica que 
                  permiten una exploración amable y profunda de tu psiquis.
                </p>
                <p>
                  A lo largo de mi trayectoria he acompañado a personas de todas las edades, desde niños 
                  hasta adultos mayores, en contextos diversos que incluyen atención primaria, rehabilitación 
                  en salud mental y acompañamiento a personas que han experimentado vulneración de derechos. 
                  Esta experiencia tanto en el ámbito público como privado me ha permitido desarrollar una 
                  mirada sensible y adaptada a las realidades de cada persona.
                </p>
                <p>
                  Cuento con diplomado en psicoterapia breve para pacientes que han sufrido 
                  abuso sexual, lo que me ha permitido desarrollar una práctica clínica sensible 
                  y especializada en trabajar con experiencias complejas.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-[#F0F7FA] p-4 rounded-xl">
                  <p className="font-semibold text-[#2B5F7A]">Formación</p>
                  <p className="text-sm text-gray-600">Universidad de Concepción + Centro de Estudios Sistémicos</p>
                </div>
                <div className="bg-[#F0F7FA] p-4 rounded-xl">
                  <p className="font-semibold text-[#2B5F7A]">Enfoque</p>
                  <p className="text-sm text-gray-600">Terapia Sistémica</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ¿Por qué Terapia Sistémica Breve? */}
      <section id="enfoque" className="py-20 md:py-32 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Por qué Terapia Sistémica Breve?
            </h2>
            <p className="text-gray-600 text-lg">
              Un enfoque práctico, eficaz y respaldado por la ciencia para transformar tu vida
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Orientada al presente',
                description: 'La terapia sistémica trabaja con los patrones actuales que mantienen el problema. Nos enfocamos en qué está sucediendo hoy y cómo cambiarlo.',
                icon: Target,
              },
              {
                title: 'Eficacia demostrada',
                description: 'Meta-análisis recientes (2024-2025) confirman que la terapia sistémica breve es tan efectiva como otros enfoques para depresión, ansiedad y problemas relacionales, con la ventaja de ser más breve.',
                icon: CheckCircle,
              },
              {
                title: 'Proceso colaborativo',
                description: 'No soy el experto que te dice qué hacer. Juntos co-construimos soluciones, identificando recursos que ya has utilizado antes y que podemos activar nuevamente.',
                icon: Brain,
              },
              {
                title: 'Enfoque en soluciones',
                description: 'En lugar de analizar profundamente el origen del problema, nos enfocamos en las "excepciones": momentos en que el problema no aparece o es más manejable, para amplificar lo que funciona.',
                icon: Sparkles,
              },
              {
                title: 'Mirada relacional',
                description: 'Entendemos que el malestar no está solo "en ti", sino en la forma en que te relacionas con tu entorno. Trabajamos con tus vínculos, comunicación y patrones familiares o de pareja.',
                icon: Waves,
              },
              {
                title: 'Proceso práctico',
                description: 'Cada sesión te llevas elementos concretos para implementar en tu día a día. La terapia ocurre tanto dentro como fuera de la consulta, con experimentos y tareas que te acercan a tus objetivos.',
                icon: Lightbulb,
              },
            ].map((item, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow h-full">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-[#2B5F7A]/10 rounded-xl flex items-center justify-center mb-6">
                    <item.icon className="h-6 w-6 text-[#2B5F7A]" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Evidencia Científica */}
      <section id="evidencia" className="py-20 md:py-32 bg-[#2B5F7A]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Respaldado por la ciencia
            </h2>
            <p className="text-white/80 text-lg">
              Investigaciones recientes que confirman la efectividad de la terapia sistémica breve
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Meta-análisis 2024-2025',
                description: 'Żak & Pękala (2025) publicaron un umbrella review en Psychotherapy Research confirmando la efectividad de la Terapia Centrada en Soluciones (SFBT) para trastornos mentales comunes, con resultados comparables a otros enfoques establecidos.',
                source: 'Psychotherapy Research, 2025',
                link: 'https://www.tandfonline.com/doi/abs/10.1080/10503307.2024.2406540'
              },
              {
                title: 'Depresión y ansiedad',
                description: 'Meta-análisis de Huang et al. (2024) demostraron que la terapia sistémica breve alivia síntomas depresivos con mayor eficacia que lista de espera, con resultados similares a la terapia cognitivo-conductual en niños y adolescentes.',
                source: 'Meta-análisis, 2024',
                link: 'https://www.sciencedirect.com/science/article/pii/S1743919124000581'
              },
              {
                title: 'Terapia online equivalente',
                description: 'Estudios recientes (2025) comparando modalidad digital vs presencial en terapia sistémica no encontraron diferencias significativas en eficacia, confirmando que la terapia online es una alternativa válida.',
                source: 'Interactive Journal of Medical Research, 2025',
                link: 'https://www.i-jmr.org/'
              },
              {
                title: 'Trastornos de conducta',
                description: 'La Brief Strategic Family Therapy mostró efectividad en reducción de uso de sustancias y mejora en relaciones familiares en adolescentes, con evidencia de seguimiento a largo plazo.',
                source: 'Journal of Marital and Family Therapy, 2024',
                link: 'https://onlinelibrary.wiley.com/journal/17520606'
              },
              {
                title: 'Reconocimiento internacional',
                description: 'La SFBT Association publicó en 2025 su manual de tratamiento actualizado, consolidando los principios y técnicas de la terapia sistémica breve como intervención basada en evidencia.',
                source: 'SFBTA Treatment Manual, 2025',
                link: 'https://www.sfbta.org/'
              },
            ].map((item, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-0 text-white h-full">
                <CardContent className="p-6">
                  <BookOpen className="h-6 w-6 text-[#7EC8E3] mb-4" />
                  <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-4">{item.description}</p>
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#7EC8E3] text-xs font-medium hover:underline inline-flex items-center gap-1"
                  >
                    {item.source}
                    <ArrowRight className="h-3 w-3" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-white/60 text-sm">
              La terapia sistémica breve es reconocida como tratamiento basado en evidencia por múltiples organizaciones internacionales.
            </p>
          </div>
        </div>
      </section>

      {/* Técnicas Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Técnicas que utilizo
            </h2>
            <p className="text-gray-600 text-lg">
              Herramientas específicas de la terapia sistémica breve para generar cambios duraderos
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Pregunta del milagro',
                description: 'Te invito a imaginar: "Si mañana despiertas y el problema se ha resuelto mágicamente, ¿qué notarías primero? ¿Qué sería diferente?" Esta técnica activa recursos y clarifica objetivos concretos.',
              },
              {
                title: 'Búsqueda de excepciones',
                description: 'Identificamos momentos en que el problema no aparece o es más manejable. "¿Cuándo fue la última vez que esto no te pasó? ¿Qué hiciste diferente?" Estas excepciones contienen las semillas de la solución.',
              },
              {
                title: 'Escalas de progreso (0-10)',
                description: 'Evaluamos tu situación en una escala numérica para hacer tangible el cambio. "Si 0 es lo peor y 10 tu objetivo, ¿dónde estás ahora? ¿Qué te haría subir medio punto?"',
              },
              {
                title: 'Imaginería terapéutica',
                description: 'Utilizamos visualizaciones guiadas para explorar tu psiquis de forma amable, acceder a recursos internos y ensayar nuevas formas de relacionarte contigo y con otros.',
              },
              {
                title: 'Reencuadre (Reframing)',
                description: 'Cambiamos la perspectiva sobre una situación problemática. Lo que parece un "defecto" puede reinterpretarse como un intento de adaptación. Esto abre nuevas posibilidades de acción.',
              },
              {
                title: 'Tareas entre sesiones',
                description: 'Diseñamos experimentos conductuales simples para probar nuevas formas de actuar. La terapia ocurre tanto dentro como fuera de la consulta.',
              },
            ].map((item, index) => (
              <div key={index} className="bg-[#F8FAFC] p-8 rounded-2xl">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#2B5F7A] text-white rounded-xl flex items-center justify-center flex-shrink-0 font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* El Espacio Section */}
      <section id="el-espacio" className="py-20 md:py-32 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Modalidades de atención
            </h2>
            <p className="text-gray-600 text-lg">
              Elige la opción que mejor se adapte a tu estilo de vida y necesidades
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Presencial */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/images/box-vista-mar.jpg"
                  alt="Espacio de consulta presencial"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#2B5F7A]/10 rounded-xl flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-[#2B5F7A]" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Presencial</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  El espacio donde trabajo está diseñado específicamente para el proceso terapéutico: 
                  un lugar <strong>seguro, cómodo y accesible</strong> ubicado en el centro de Valparaíso.
                </p>
                <div className="space-y-3">
                  {[
                    'Espacio seguro y resguardado',
                    'Ambiente tranquilo y privado',
                    'Iluminación natural',
                    'Ubicación céntrica en Valparaíso',
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-[#2B5F7A]/10 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-3 w-3 text-[#2B5F7A]" />
                      </div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Online */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/images/terapia-online.jpg"
                  alt="Terapia online con vista al mar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#7EC8E3]/20 rounded-xl flex items-center justify-center">
                    <Video className="h-5 w-5 text-[#2B5F7A]" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Online</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  La terapia online ofrece la misma calidad y efectividad que la presencial. 
                  Desde la comodidad de tu espacio, puedes acceder al proceso terapéutico 
                  sin barreras geográficas.
                </p>
                <div className="space-y-3">
                  {[
                    'Desde la comodidad de tu hogar',
                    'Plataforma segura y privada',
                    'Misma calidad terapéutica',
                    'Disponible para todo Chile',
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-[#2B5F7A]/10 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-3 w-3 text-[#2B5F7A]" />
                      </div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Section */}
      <section className="py-20 md:py-32 bg-[#2B5F7A]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Modalidades de atención
            </h2>
            <p className="text-white/80 text-lg">
              Elige la opción que mejor se adapte a tus necesidades
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#2B5F7A]/10 rounded-xl flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-[#2B5F7A]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Presencial</h3>
                    <p className="text-gray-500">En mi consulta en Valparaíso</p>
                  </div>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-[#2B5F7A]">$36.000</span>
                  <span className="text-gray-500"> / sesión</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {[
                    'Espacio diseñado para la terapia',
                    'Ambiente tranquilo y privado',
                    'Duración: 50 minutos',
                    'Ideal para Valparaíso, Viña y alrededores',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#2B5F7A] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  onClick={() => scrollToSection('agendar')}
                  className="w-full bg-[#2B5F7A] hover:bg-[#1E4A5F] text-white"
                >
                  Ver disponibilidad
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#7EC8E3]/20 rounded-xl flex items-center justify-center">
                    <Video className="h-6 w-6 text-[#2B5F7A]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Online</h3>
                    <p className="text-gray-500">Desde cualquier lugar de Chile</p>
                  </div>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-[#2B5F7A]">$28.000</span>
                  <span className="text-gray-500"> / sesión</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {[
                    'Desde la comodidad de tu hogar',
                    'Plataforma segura y privada',
                    'Duración: 50 minutos',
                    'Disponible para todo Chile',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#2B5F7A] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  onClick={() => scrollToSection('agendar')}
                  className="w-full bg-[#7EC8E3] hover:bg-[#5BA8C4] text-[#1E4A5F] font-semibold"
                >
                  Ver disponibilidad
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Preguntas Frecuentes */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Preguntas frecuentes
            </h2>
            <p className="text-gray-600 text-lg">
              Respuestas a las dudas más comunes sobre el proceso terapéutico
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-[#2B5F7A] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-[#2B5F7A] flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agendar Section - Calendly */}
      <section id="agendar" className="py-20 md:py-32 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block bg-[#2B5F7A]/10 text-[#2B5F7A] px-4 py-2 rounded-full text-sm font-medium mb-4">
              Comienza tu proceso hoy
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Agenda tu sesión
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              El primer paso hacia el cambio es más simple de lo que crees. 
              Selecciona la fecha y hora que mejor se ajuste a tu disponibilidad.
            </p>
          </div>

          {/* Proceso paso a paso */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                step: '1',
                title: 'Selecciona tu hora',
                description: 'Elige la fecha y hora que más te convenga en el calendario. Podrás ver toda mi disponibilidad actualizada.'
              },
              {
                step: '2',
                title: 'Recibe confirmación automática',
                description: 'Al agendar, recibirás un correo inmediato con los detalles de tu solicitud de hora.'
              },
              {
                step: '3',
                title: 'Espera mi confirmación',
                description: 'Revisaré tu solicitud y te confirmaré la hora por correo o el medio de contacto que prefieras. ¡Tu sesión estará 100% agendada!'
              }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 h-full">
                  <div className="w-12 h-12 bg-[#2B5F7A] text-white rounded-xl flex items-center justify-center text-xl font-bold mb-6">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{item.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-6 w-6 text-[#2B5F7A]/30" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Calendly Widget */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="bg-[#2B5F7A] px-6 py-4">
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-white" />
                <span className="text-white font-medium">Calendario de disponibilidad</span>
              </div>
            </div>
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/almancillaps?hide_landing_page_details=1&hide_gdpr_banner=1&primary_color=2B5F7A&hide_event_type_details=1&background_color=ffffff&text_color=333333" 
              style={{ minWidth: '320px', height: '650px' }}
            />
          </div>

          {/* Info adicional */}
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#F0F7FA] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-[#2B5F7A]" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">¿Qué pasa después de agendar?</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Recibirás un correo automático con tu solicitud. Yo revisaré mi agenda y te confirmaré la hora en un plazo máximo de 24 horas.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#F0F7FA] rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-5 w-5 text-[#2B5F7A]" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Tu hora está confirmada cuando...</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Recibas mi respuesta personalizada confirmando la sesión. Hasta ese momento, la hora queda como solicitud pendiente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto Section */}
      <section id="contacto" className="py-20 md:py-32 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Comienza tu proceso
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                El primer paso es el más importante. Contáctame para coordinar una sesión 
                o resolver cualquier duda sobre el proceso terapéutico.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#2B5F7A]/10 rounded-xl flex items-center justify-center">
                    <Instagram className="h-5 w-5 text-[#2B5F7A]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Instagram</p>
                    <p className="font-semibold text-gray-900">@ps.almancilla</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#2B5F7A]/10 rounded-xl flex items-center justify-center">
                    <Mail className="h-5 w-5 text-[#2B5F7A]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Correo electrónico</p>
                    <p className="font-semibold text-gray-900">almancillaps@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#2B5F7A]/10 rounded-xl flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-[#2B5F7A]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Ubicación</p>
                    <p className="font-semibold text-gray-900">Valparaíso, Chile</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                <p className="text-sm text-gray-600 mb-4">¿Listo para agendar o tienes dudas?</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a 
                    href="https://www.instagram.com/ps.almancilla/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full sm:w-auto bg-[#E4405F] hover:bg-[#D62D4E] text-white">
                      <Instagram className="mr-2 h-4 w-4" />
                      Solicitar contacto
                    </Button>
                  </a>
                  <a 
                    href="mailto:almancillaps@gmail.com?subject=Consulta%20terapia%20-%20Contacto%20desde%20web&body=Hola%20Alonso,%0A%0AMe%20interesa%20coordinar%20una%20sesión%20de%20terapia.%0A%0AModalidad%20preferida:%20%0A%0AMotivo%20de%20consulta:%20%0A%0ASaludos,"
                  >
                    <Button variant="outline" className="w-full sm:w-auto border-[#2B5F7A] text-[#2B5F7A] hover:bg-[#2B5F7A]/10">
                      <Send className="mr-2 h-4 w-4" />
                      Enviar email
                    </Button>
                  </a>
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  Te responderé a la brevedad para coordinar tu sesión
                </p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Solicita información
              </h3>
              <form 
                action="mailto:almancillaps@gmail.com" 
                method="post" 
                encType="text/plain"
                className="space-y-4"
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2B5F7A] focus:ring-2 focus:ring-[#2B5F7A]/20 outline-none transition-all"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2B5F7A] focus:ring-2 focus:ring-[#2B5F7A]/20 outline-none transition-all"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Modalidad preferida
                  </label>
                  <select name="modalidad" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2B5F7A] focus:ring-2 focus:ring-[#2B5F7A]/20 outline-none transition-all bg-white">
                    <option value="">Selecciona una opción</option>
                    <option value="presencial">Presencial (Valparaíso)</option>
                    <option value="online">Online</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    name="mensaje"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2B5F7A] focus:ring-2 focus:ring-[#2B5F7A]/20 outline-none transition-all resize-none"
                    placeholder="Cuéntame brevemente tu motivo de consulta..."
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-[#2B5F7A] hover:bg-[#1E4A5F] text-white py-3"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Enviar mensaje
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <Waves className="h-6 w-6 text-[#7EC8E3]" />
              <span className="font-semibold text-lg">Psicólogo Alonso Mancilla</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span>Valparaíso, Chile</span>
              <span>•</span>
              <span>Terapia sistémica breve basada en evidencia</span>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
            <p>© 2025 Psicólogo Alonso Mancilla. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Calendly Widget Script */}
      <script 
        type="text/javascript" 
        src="https://assets.calendly.com/assets/external/widget.js" 
        async
      />
    </div>
  );
}

export default App;
