"use client";

const client1 = "/AAA_Client/Pasted image.png";
const client3 = "/AAA_Client/Pasted image (2).png";
const client4 = "/AAA_Client/Pasted image (3).png";
const client5 = "/AAA_Client/Pasted image (4).png";
const client6 = "/AAA_Client/Pasted image (5).png";
const client7 = "/AAA_Client/Pasted image (6).png";
const client8 = "/AAA_Client/Pasted image (7).png";
const client9 = "/AAA_Client/Pasted image (8).png";
const client10 = "/AAA_Client/Pasted image (9).png";
const client11 = "/AAA_Client/Pasted image (10).png";
const client12 = "/AAA_Client/Pasted image (11).png";
const client13 = "/AAA_Client/Pasted image (12).png";
const client14 = "/AAA_Client/Pasted image (13).png";
const client15 = "/AAA_Client/Pasted image (14).png";
const client16 = "/AAA_Client/Pasted image (15).png";
const client17 = "/AAA_Client/Pasted image (16).png";
const client18 = "/AAA_Client/Pasted image (17).png";
const client19 = "/AAA_Client/Pasted image (18).png";
const client20 = "/AAA_Client/Pasted image (19).png";
const client21 = "/AAA_Client/Pasted image (20).png";

const ClientLogoCarousel = () => {
  // Client logos with imported images
  const logos = [
    { name: 'Client 1', url: client1 },
    { name: 'Client 3', url: client3 },
    { name: 'Client 4', url: client4 },
    { name: 'Client 5', url: client5 },
    { name: 'Client 6', url: client6 },
    { name: 'Client 7', url: client7 },
    { name: 'Client 8', url: client8 },
    { name: 'Client 9', url: client9 },
    { name: 'Client 10', url: client10 },
    { name: 'Client 11', url: client11 },
    { name: 'Client 12', url: client12 },
    { name: 'Client 13', url: client13 },
    { name: 'Client 14', url: client14 },
    { name: 'Client 15', url: client15 },
    { name: 'Client 16', url: client16 },
    { name: 'Client 17', url: client17 },
    { name: 'Client 18', url: client18 },
    { name: 'Client 19', url: client19 },
    { name: 'Client 20', url: client20 },
    { name: 'Client 21', url: client21 }
  ];

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="w-full overflow-hidden bg-gray-50 py-12">
      <div className="text-center mb-8">
        <h2 className="lg:text-4xl font-bold text-[#f58a1f] uppercase mb-2">Trusted by Industry Leaders</h2>
        <p className="text-gray-600 ">Join a network of industry pioneers</p>
      </div>
      
      <div className="relative">
        {/* Main scrolling container */}
        <div className="flex animate-scroll space-x-8">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex-shrink-0 w-40 h-20 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-center group"
            >
              <img
                src={logo.url}
                alt={`${logo.name} logo`}
                className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div 
                className="hidden items-center justify-center w-full h-full text-gray-500 text-sm font-medium"
              >
                {logo.name}
              </div>
            </div>
          ))}
        </div>
        
        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-10"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-gray-50 to-transparent pointer-events-none z-10"></div>
      </div>
      
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default ClientLogoCarousel;