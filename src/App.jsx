import React, { useState, useEffect, useRef } from "react";

const store = [
  {
    section: "iPhone",
    icon: "📱",
    items: [
      { name: "iPhone 7", image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-7-1.jpg" },
      { name: "iPhone 8", image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-8-1.jpg" },
      { name: "iPhone X", image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-x-1.jpg" },
      { name: "iPhone XS", image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-xs-1.jpg" },
      { name: "iPhone 11", image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-11-1.jpg" },
      { name: "iPhone 12", image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-1.jpg" },
      { name: "iPhone 13", image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-1.jpg" },
      { name: "iPhone 14", image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-1.jpg" },
      { name: "iPhone 15", image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-1.jpg" },
      { name: "iPhone 15 Pro", image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-1.jpg" },
      { name: "iPhone 16", image: "https://images.unsplash.com/photo-1729059362533-aa6b837f9a1a?w=500&auto=format&fit=crop" },
      { name: "iPhone 16 Pro", image: "https://images.unsplash.com/photo-1729059362557-511b0d0fcf77?w=500&auto=format&fit=crop" },
      { name: "iPhone 17", image: "https://images.unsplash.com/photo-1729524414705-c8b1c2546e47?w=500&auto=format&fit=crop" },
      { name: "iPhone 17 Pro", image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&auto=format&fit=crop" }
    ]
  },
  {
    section: "Apple Watch",
    icon: "⌚",
    items: [
      { name: "Apple Watch Series 7", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MKUU3_AV1?wid=500&hei=500&fmt=jpeg&qlt=95&.v=1630705872000" },
      { name: "Apple Watch Series 8", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQDY3ref_AV1?wid=500&hei=500&fmt=jpeg&qlt=95&.v=1660715723147" },
      { name: "Apple Watch Series 9", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MT943_AV1?wid=500&hei=500&fmt=jpeg&qlt=95&.v=1694010559301" },
      { name: "Apple Watch Ultra", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQE23_AV1?wid=500&hei=500&fmt=jpeg&qlt=95&.v=1660715723147" },
      { name: "Apple Watch SE", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQKX3_AV1?wid=500&hei=500&fmt=jpeg&qlt=95&.v=1660715723147" }
    ]
  },
  {
    section: "AirPods",
    icon: "🎧",
    items: [
      { name: "AirPods 2da Generación", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME73?wid=500&hei=500&fmt=jpeg&qlt=95&.v=1632861342000" },
      { name: "AirPods 3ra Generación", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME73_AV1?wid=500&hei=500&fmt=jpeg&qlt=95&.v=1693009279037" },
      { name: "AirPods Pro 2", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQD83_AV1?wid=500&hei=500&fmt=jpeg&qlt=95&.v=1660715723147" },
      { name: "AirPods Max", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MGYJ3_AV1?wid=500&hei=500&fmt=jpeg&qlt=95&.v=1631149968000" }
    ]
  },
  {
    section: "Cargadores",
    icon: "🔌",
    items: [
      { name: "Cargador MagSafe", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MHXH3?wid=500&hei=500&fmt=jpeg&qlt=95&.v=1661269855445" },
      { name: "Cable USB-C (1m)", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQGH2?wid=500&hei=500&fmt=jpeg&qlt=95&.v=1661269855410" },
      { name: "Adaptador de 20W", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MU7V2?wid=500&hei=500&fmt=jpeg&qlt=95&.v=1542406417325" },
      { name: "Cargador MagSafe Duo", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MHJE3?wid=500&hei=500&fmt=jpeg&qlt=95&.v=1599549598000" }
    ]
  }
];

export default function iStoreX() {
  const [darkMode, setDarkMode] = useState(true);
  const [selectedSection, setSelectedSection] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const whatsappNumber = "573146914051";
  const mainRef = useRef(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.mobile-menu')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  const whatsappLink = (product) =>
    `https://wa.me/${whatsappNumber}?text=Hola,%20me%20interesa%20el%20${encodeURIComponent(product)}%20de%20iStoreX`;

  const scrollToSection = (sectionName) => {
    const element = document.getElementById(sectionName);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setSelectedSection(sectionName);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white' 
        : 'bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900'
    }`}>
      
      {/* Header Moderno - Optimizado para móvil */}
      <header className={`sticky top-0 z-50 backdrop-blur-lg ${darkMode 
          ? 'bg-gray-900/95 border-b border-gray-800' 
          : 'bg-white/95 border-b border-gray-200'
      } transition-all duration-300`}>
        <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Logo y Nombre */}
            <div className="flex items-center space-x-3">
              <div className={`p-2 rounded-lg sm:p-2.5 sm:rounded-xl ${darkMode 
                  ? 'bg-gradient-to-br from-gray-800 to-black' 
                  : 'bg-gradient-to-br from-gray-100 to-white'
              } shadow-lg`}>
                <span className="text-2xl">🍎</span>
              </div>
              <div>
                <h1 className={`text-xl sm:text-2xl font-bold bg-gradient-to-r ${darkMode 
                    ? 'from-white to-gray-400' 
                    : 'from-gray-900 to-gray-600'
                } bg-clip-text text-transparent`}>
                  iStoreX
                </h1>
                <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} mt-0.5 hidden sm:block`}>
                  Catálogo Apple Premium
                </p>
              </div>
            </div>

            {/* Botones de Acción */}
            <div className="flex items-center space-x-3">
              {/* Botón WhatsApp en Header */}
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg sm:rounded-xl font-medium transition-all ${darkMode
                    ? 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700'
                    : 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white'
                } shadow-lg hover:shadow-xl text-sm sm:text-base`}
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.507 14.307l-.009.075l-1.187 5.396c-.277 1.258-1.403 1.599-2.302.949l-3.205-2.403a8.7 8.7 0 0 1-4.307-7.223A8.339 8.339 0 0 1 11.987 4.5a8.337 8.337 0 0 1 8.362 8.517c0 1.102-.24 2.156-.842 3.29zM12 2a9.956 9.956 0 0 0-7.07 2.93A9.956 9.956 0 0 0 2 12a9.956 9.956 0 0 0 2.93 7.07A9.956 9.956 0 0 0 12 22a9.93 9.93 0 0 0 4.265-.951l4.707 3.53c.654.49 1.43.321 1.863-.315c.39-.584.235-1.5-.346-2.105l-3.456-2.638A9.92 9.92 0 0 0 22 12A9.956 9.956 0 0 0 12 2z"/>
                </svg>
                <span className="hidden sm:inline">Contactar</span>
                <span className="sm:hidden">Chat</span>
              </a>

              {/* Botón Menú Hamburger para móvil */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-lg transition-all sm:hidden ${darkMode
                    ? 'bg-gradient-to-br from-gray-800 to-black hover:from-gray-700 hover:to-gray-900'
                    : 'bg-gradient-to-br from-gray-100 to-white hover:from-gray-200 hover:to-gray-50'
                } shadow-lg hover:shadow-xl`}
                aria-label="Toggle menu"
              >
                <span className="text-xl">
                  {isMenuOpen ? '✕' : '☰'}
                </span>
              </button>

              {/* Botón Dark/Light Mode - Solo visible en desktop */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2.5 sm:p-3 rounded-lg sm:rounded-xl transition-all hidden sm:block ${darkMode
                    ? 'bg-gradient-to-br from-gray-800 to-black hover:from-gray-700 hover:to-gray-900'
                    : 'bg-gradient-to-br from-gray-100 to-white hover:from-gray-200 hover:to-gray-50'
                } shadow-lg hover:shadow-xl`}
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <span className="text-xl">☀️</span>
                ) : (
                  <span className="text-xl">🌙</span>
                )}
              </button>
            </div>
          </div>

          {/* Navegación por Secciones - Versión Desktop */}
          <nav className="mt-4 sm:mt-6 overflow-x-auto pb-2 scrollbar-hide hidden sm:block">
            <div className="flex space-x-3">
              {store.map((section) => (
                <button
                  key={section.section}
                  onClick={() => scrollToSection(section.section)}
                  className={`flex items-center px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg sm:rounded-xl whitespace-nowrap transition-all ${selectedSection === section.section
                      ? darkMode
                        ? 'bg-gradient-to-r from-gray-700 to-gray-900 shadow-lg'
                        : 'bg-gradient-to-r from-gray-200 to-gray-300 shadow-lg'
                      : darkMode
                      ? 'bg-gray-800/50 hover:bg-gray-800'
                      : 'bg-gray-100/50 hover:bg-gray-200'
                  } text-sm sm:text-base`}
                >
                  <span className="mr-2">{section.icon}</span>
                  <span className="font-medium">{section.section}</span>
                </button>
              ))}
            </div>
          </nav>

          {/* Menú Móvil Desplegable */}
          {isMenuOpen && (
            <div className="mobile-menu absolute top-full left-0 right-0 mt-1 sm:hidden">
              <div className={`mx-4 rounded-xl shadow-2xl ${darkMode 
                  ? 'bg-gray-800 border border-gray-700' 
                  : 'bg-white border border-gray-200'
              }`}>
                <div className="p-3">
                  {/* Botón Dark/Light Mode para móvil */}
                  <button
                    onClick={() => {
                      setDarkMode(!darkMode);
                      setIsMenuOpen(false);
                    }}
                    className={`flex items-center justify-center w-full p-3 rounded-lg mb-2 ${darkMode
                        ? 'bg-gray-700 hover:bg-gray-600'
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                  >
                    {darkMode ? (
                      <>
                        <span className="text-xl mr-3">☀️</span>
                        <span>Modo Claro</span>
                      </>
                    ) : (
                      <>
                        <span className="text-xl mr-3">🌙</span>
                        <span>Modo Oscuro</span>
                      </>
                    )}
                  </button>
                  
                  {/* Secciones en menú móvil */}
                  {store.map((section) => (
                    <button
                      key={section.section}
                      onClick={() => scrollToSection(section.section)}
                      className={`flex items-center w-full p-3 rounded-lg mb-1 ${selectedSection === section.section
                          ? darkMode
                            ? 'bg-gray-700'
                            : 'bg-gray-200'
                          : darkMode
                          ? 'hover:bg-gray-700/50'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      <span className="text-xl mr-3">{section.icon}</span>
                      <span className="font-medium">{section.section}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      <main ref={mainRef} className="max-w-7xl mx-auto px-4 py-6 sm:px-6 sm:py-8">
        {/* Sección Destacada */}
        <div className={`mb-8 sm:mb-12 rounded-xl sm:rounded-2xl p-4 sm:p-6 ${darkMode
            ? 'bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50'
            : 'bg-gradient-to-r from-gray-100/50 to-gray-50/50 backdrop-blur-sm border border-gray-200/50'
        }`}>
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="text-center sm:text-left mb-3 sm:mb-0">
              <h2 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">⚡ Oferta Especial</h2>
              <p className={`text-sm sm:text-base ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Consulta disponibilidad y precios por WhatsApp
              </p>
            </div>
            <div>
              <span className={`text-base sm:text-xl font-bold ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
                📱 Todos los modelos
              </span>
            </div>
          </div>
        </div>

        {/* Productos */}
        {store.map((section) => (
          <section 
            key={section.section} 
            id={section.section}
            className="mb-12 sm:mb-16 scroll-mt-20 sm:scroll-mt-24"
          >
            <div className="flex items-center mb-6 sm:mb-8">
              <div className={`p-2.5 sm:p-3 rounded-xl mr-3 sm:mr-4 ${darkMode 
                  ? 'bg-gradient-to-br from-gray-800 to-black' 
                  : 'bg-gradient-to-br from-gray-100 to-white'
              } shadow-lg`}>
                <span className="text-xl sm:text-2xl">{section.icon}</span>
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold">{section.section}</h2>
                <div className={`h-1 w-16 sm:w-24 mt-1 sm:mt-2 rounded-full ${darkMode 
                    ? 'bg-gradient-to-r from-gray-600 to-transparent' 
                    : 'bg-gradient-to-r from-gray-300 to-transparent'
                }`}></div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {section.items.map((product) => (
                <div
                  key={product.name}
                  className={`group rounded-xl sm:rounded-2xl p-4 sm:p-5 transition-all duration-300 ${darkMode
                      ? 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 hover:from-gray-700/50 hover:to-gray-800/50 border border-gray-700/30 hover:border-gray-600/50'
                      : 'bg-gradient-to-br from-white/70 to-gray-50/70 hover:from-gray-50/70 hover:to-gray-100/70 border border-gray-200/50 hover:border-gray-300/70'
                  } shadow-lg hover:shadow-xl transform hover:-translate-y-1`}
                >
                  <div className="text-center">
                    {/* Nombre del Producto */}
                    <h3 className={`font-bold text-base sm:text-lg mb-3 sm:mb-4 line-clamp-1 ${darkMode ? 'text-gray-100' : 'text-gray-800'
                    }`}>
                      {product.name}
                    </h3>
                    
                    {/* Foto del Producto */}
                    <div className="h-40 sm:h-52 flex items-center justify-center mb-4 sm:mb-5 px-2">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "https://via.placeholder.com/200x200?text=Imagen+no+disponible";
                        }}
                      />
                    </div>

                    {/* Botón WhatsApp */}
                    <a
                      href={whatsappLink(product.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center w-full py-3 rounded-lg sm:rounded-xl font-semibold transition-all ${darkMode
                          ? 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white'
                          : 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white'
                      } shadow-md hover:shadow-lg group-hover:shadow-xl text-sm sm:text-base`}
                    >
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.507 14.307l-.009.075l-1.187 5.396c-.277 1.258-1.403 1.599-2.302.949l-3.205-2.403a8.7 8.7 0 0 1-4.307-7.223A8.339 8.339 0 0 1 11.987 4.5a8.337 8.337 0 0 1 8.362 8.517c0 1.102-.24 2.156-.842 3.29zM12 2a9.956 9.956 0 0 0-7.07 2.93A9.956 9.956 0 0 0 2 12a9.956 9.956 0 0 0 2.93 7.07A9.956 9.956 0 0 0 12 22a9.93 9.93 0 0 0 4.265-.951l4.707 3.53c.654.49 1.43.321 1.863-.315c.39-.584.235-1.5-.346-2.105l-3.456-2.638A9.92 9.92 0 0 0 22 12A9.956 9.956 0 0 0 12 2z"/>
                      </svg>
                      <span className="hidden sm:inline">Comprar por WhatsApp</span>
                      <span className="sm:hidden">Comprar</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* CTA Final */}
        <div className={`mt-12 sm:mt-16 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center ${darkMode
            ? 'bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50'
            : 'bg-gradient-to-r from-gray-100/50 to-gray-50/50 backdrop-blur-sm border border-gray-200/50'
        }`}>
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">¿No encuentras lo que buscas?</h2>
          <p className={`mb-4 sm:mb-6 text-sm sm:text-base ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Consulta por otros productos Apple disponibles
          </p>
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all ${darkMode
                ? 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white'
                : 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white'
            } shadow-lg hover:shadow-xl`}
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.507 14.307l-.009.075l-1.187 5.396c-.277 1.258-1.403 1.599-2.302.949l-3.205-2.403a8.7 8.7 0 0 1-4.307-7.223A8.339 8.339 0 0 1 11.987 4.5a8.337 8.337 0 0 1 8.362 8.517c0 1.102-.24 2.156-.842 3.29zM12 2a9.956 9.956 0 0 0-7.07 2.93A9.956 9.956 0 0 0 2 12a9.956 9.956 0 0 0 2.93 7.07A9.956 9.956 0 0 0 12 22a9.93 9.93 0 0 0 4.265-.951l4.707 3.53c.654.49 1.43.321 1.863-.315c.39-.584.235-1.5-.346-2.105l-3.456-2.638A9.92 9.92 0 0 0 22 12A9.956 9.956 0 0 0 12 2z"/>
            </svg>
            Contactar por WhatsApp
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className={`mt-12 sm:mt-16 py-6 sm:py-8 px-4 sm:px-6 ${darkMode 
          ? 'border-t border-gray-800/50 bg-gray-900/30' 
          : 'border-t border-gray-200/50 bg-gray-50/30'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="mb-4 sm:mb-0 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start">
                <span className="text-2xl mr-3">🍎</span>
                <span className={`text-xl font-bold ${darkMode 
                    ? 'text-white' 
                    : 'text-gray-900'
                }`}>
                  iStoreX
                </span>
              </div>
              <p className={`text-xs sm:text-sm mt-1 sm:mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Catálogo oficial de productos Apple
              </p>
            </div>
            
            <div className={`text-center ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              <p className="text-xs sm:text-sm">© {new Date().getFullYear()} iStoreX</p>
              <p className="text-xs mt-1">WhatsApp: +57 {whatsappNumber.substring(3)}</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Botón flotante de WhatsApp para móvil */}
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-6 right-6 z-40 sm:hidden p-4 rounded-full shadow-2xl transition-transform hover:scale-110 ${darkMode
            ? 'bg-gradient-to-r from-green-500 to-emerald-600'
            : 'bg-gradient-to-r from-green-500 to-emerald-600'
        }`}
        aria-label="Contactar por WhatsApp"
      >
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.507 14.307l-.009.075l-1.187 5.396c-.277 1.258-1.403 1.599-2.302.949l-3.205-2.403a8.7 8.7 0 0 1-4.307-7.223A8.339 8.339 0 0 1 11.987 4.5a8.337 8.337 0 0 1 8.362 8.517c0 1.102-.24 2.156-.842 3.29zM12 2a9.956 9.956 0 0 0-7.07 2.93A9.956 9.956 0 0 0 2 12a9.956 9.956 0 0 0 2.93 7.07A9.956 9.956 0 0 0 12 22a9.93 9.93 0 0 0 4.265-.951l4.707 3.53c.654.49 1.43.321 1.863-.315c.39-.584.235-1.5-.346-2.105l-3.456-2.638A9.92 9.92 0 0 0 22 12A9.956 9.956 0 0 0 12 2z"/>
        </svg>
      </a>
    </div>
  );
}