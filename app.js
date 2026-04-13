import React, { useState } from 'react';
import { 
  Bed, Ambulance, User, ShieldCheck, MapPin, 
  Search, Clock, Star, ChevronRight, PhoneCall 
} from 'lucide-react';

// Mock Data for Demo (As mentioned in Slide 7)
const HOSPITAL_DATA = [
  { id: 1, name: "City General Hospital", distance: "1.2 km", beds: { icu: 2, general: 15 }, rating: 4.5, insurance: ["Aetna", "BlueCross"], specialty: "Cardiac, Trauma" },
  { id: 2, name: "St. Mary's Care", distance: "3.5 km", beds: { icu: 0, general: 8 }, rating: 4.2, insurance: ["UnitedHealth", "Cigna"], specialty: "Pediatrics, Neuro" },
  { id: 3, name: "Apex Multispeciality", distance: "5.0 km", beds: { icu: 5, general: 20 }, rating: 4.8, insurance: ["Aetna", "Star Health"], specialty: "Oncology, General" },
];

const App = () => {
  const [view, setView] = useState('home'); // home, beds, ambulance, insurance
  const [selectedHospital, setSelectedHospital] = useState(null);
  const [bookingStatus, setBookingStatus] = useState(false);

  // --- Component: Home Page ---
  const HomePage = () => (
    <div className="p-4 space-y-6">
      <div className="bg-blue-600 rounded-3xl p-6 text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-2xl font-bold">Emergency Help?</h1>
          <p className="text-blue-100 mb-4">Find available beds and ambulances instantly.</p>
          <button 
            onClick={() => setView('beds')} 
            className="bg-white text-blue-600 px-6 py-2 rounded-full font-bold shadow-md flex items-center gap-2"
          >
            <Search size={18} /> Find Bed Now
          </button>
        </div>
        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-blue-400 rounded-full opacity-50"></div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <ServiceCard 
          icon={<Bed className="text-blue-500" />} 
          title="Book Bed" 
          onClick={() => setView('beds')} 
        />
        <ServiceCard 
          icon={<Ambulance className="text-red-500" />} 
          title="Ambulance" 
          onClick={() => setView('ambulance')} 
        />
        <ServiceCard 
          icon={<User className="text-green-500" />} 
          title="Find Doctor" 
          onClick={() => setView('beds')} 
        />
        <ServiceCard 
          icon={<ShieldCheck className="text-purple-500" />} 
          title="Insurance" 
          onClick={() => setView('insurance')} 
        />
      </div>
    </div>
  );

  // --- Component: Bed Search ---
  const BedSearch = () => (
    <div className="p-4 space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <button onClick={() => setView('home')} className="text-gray-500">←</button>
        <h2 className="text-xl font-bold">Available Beds</h2>
      </div>
      
      {HOSPITAL_DATA.map(hosp => (
        <div key={hosp.id} className="bg-white border rounded-2xl p-4 shadow-sm space-y-3">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold text-lg">{hosp.name}</h3>
              <div className="flex items-center text-gray-500 text-sm gap-1">
                <MapPin size={14} /> {hosp.distance} away
              </div>
            </div>
            <div className="flex items-center bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs font-bold">
              <Star size={12} className="fill-current mr-1" /> {hosp.rating}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className={`p-2 rounded-lg border text-center ${hosp.beds.icu > 0 ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
              <p className="text-xs text-gray-500 uppercase">ICU Beds</p>
              <p className={`font-bold ${hosp.beds.icu > 0 ? 'text-green-600' : 'text-red-600'}`}>{hosp.beds.icu}</p>
            </div>
            <div className={`p-2 rounded-lg border text-center ${hosp.beds.general > 0 ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
              <p className="text-xs text-gray-500 uppercase">General</p>
              <p className="font-bold text-green-600">{hosp.beds.general}</p>
            </div>
          </div>

          <button 
            onClick={() => setSelectedHospital(hosp)}
            className="w-full bg-blue-600 text-white py-2 rounded-xl font-medium hover:bg-blue-700 transition"
          >
            Book Now
          </button>
        </div>
      ))}
    </div>
  );

  // --- Component: Ambulance Booking ---
  const AmbulanceView = () => (
    <div className="p-4 text-center space-y-6">
      <button onClick={() => setView('home')} className="text-left text-gray-500">← Back</button>
      <div className="py-10">
        <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Ambulance size={40} className="text-red-600" />
        </div>
        <h2 className="text-2xl font-bold">Emergency Ambulance</h2>
        <p className="text-gray-500 mt-2">The nearest ambulance will be dispatched to your current location.</p>
      </div>
      <button 
        onClick={() => alert("Ambulance Dispatched! ETA: 8 Mins")}
        className="w-full bg-red-600 text-white py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-lg"
      >
        <PhoneCall size={24} /> Call Ambulance Now
      </button>
    </div>
  );

  // --- Component: Booking Confirmation Modal ---
  const BookingModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-3xl p-6 w-full max-w-xs text-center space-y-4">
        {!bookingStatus ? (
          <>
            <h3 className="text-xl font-bold">Confirm Booking?</h3>
            <p className="text-gray-500">Book a bed at <b>{selectedHospital?.name}</b>?</p>
            <div className="flex gap-2">
              <button onClick={() => setSelectedHospital(null)} className="flex-1 py-2 border rounded-xl">Cancel</button>
              <button onClick={() => setBookingStatus(true)} className="flex-1 py-2 bg-blue-600 text-white rounded-xl">Confirm</button>
            </div>
          </>
        ) : (
          <>
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-2">
              <ShieldCheck size={32} />
            </div>
            <h3 className="text-xl font-bold">Booking Confirmed!</h3>
            <p className="text-gray-500">Your bed is reserved. Please proceed to the hospital.</p>
            <button onClick={() => {setBookingStatus(false); setSelectedHospital(null); setView('home');}} className="w-full py-2 bg-blue-600 text-white rounded-xl">Done</button>
          </>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center">
      {/* Mobile App Container */}
      <div className="w-full max-w-md bg-white min-h-screen shadow-2xl relative overflow-hidden flex flex-col">
        
        {/* Header */}
        <header className="p-4 border-b flex justify-between items-center bg-white sticky top-0 z-10">
          <h1 className="font-black text-blue-600 text-xl tracking-tighter">SMART<span className="text-gray-800">HEALTH</span></h1>
          <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="user" />
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 pb-20">
          {view === 'home' && <HomePage />}
          {view === 'beds' && <BedSearch />}
          {view === 'ambulance' && <AmbulanceView />}
          {view === 'insurance' && (
            <div className="p-4 text-center">
              <button onClick={() => setView('home')} className="text-left text-gray-500">← Back</button>
              <h2 className="text-xl font-bold mt-4">Insurance Checker</h2>
              <input type="text" placeholder="Enter Policy Number" className="w-full p-3 mt-4 border rounded-xl" />
              <button className="w-full bg-blue-600 text-white py-3 rounded-xl mt-4">Verify Compatibility</button>
            </div>
          )}
        </main>

        {/* Bottom Navigation */}
        <nav className="fixed bottom-0 w-full max-w-md bg-white border-t flex justify-around py-3 text-gray-400">
          <button onClick={() => setView('home')} className={`${view === 'home' ? 'text-blue-600' : ''} flex flex-col items-center`}>
            <User size={20} /><span className="text-xs">Profile</span>
          </button>
          <button onClick={() => setView('beds')} className={`${view === 'beds' ? 'text-blue-600' : ''} flex flex-col items-center`}>
            <Bed size={20} /><span className="text-xs">Beds</span>
          </button>
          <button onClick={() => setView('ambulance')} className={`${view === 'ambulance' ? 'text-blue-600' : ''} flex flex-col items-center`}>
            <Ambulance size={20} /><span className="text-xs">Ambulance</span>
          </button>
        </nav>

        {/* Modals */}
        {selectedHospital && <BookingModal />}
      </div>
    </div>
  );
};

// Helper Component for Home Screen Buttons
const ServiceCard = ({ icon, title, onClick }) => (
  <div 
    onClick={onClick}
    className="bg-white p-4 rounded-2xl border shadow-sm flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-blue-400 transition active:scale-95"
  >
    <div className="p-3 bg-gray-50 rounded-full">{icon}</div>
    <span className="font-semibold text-gray-700 text-sm">{title}</span>
  </div>
);

export default App;
