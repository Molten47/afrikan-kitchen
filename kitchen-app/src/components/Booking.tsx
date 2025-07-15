import React, { useState } from 'react';
import { MapPin, Phone, Mail, Calendar, Download } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    datetime: '',
    phone: '',
    location: ''
  });

  const [selectedLocation, setSelectedLocation] = useState(null);

  // Sample locations data
  const locations = [
    { id: 1, name: 'Merseyside Branch', address: '42 Liverpool Lane, Toxteth Merseyside, L8 9DT', lat: 40.7128, lng: -74.0060, phone: '+1 (555) 123-4567' },
    { id: 2, name: 'Oldham Location', address: '21 Crompton Road, Chadderton Oldham, OL9 8BG', lat: 40.7589, lng: -73.9851, phone: '+1 (555) 234-5678' },
    { id: 3, name: 'London Coolney Branch', address: '7 Elmwood Close, Coolney Green Coolney, RH5 2PL', lat: 40.7505, lng: -73.9934, phone: '+1 (555) 345-6789' },
    { id: 4, name: 'Peckham Restaurant', address: '321 Elm St, Uptown', lat: 40.7831, lng: -73.9712, phone: '+1 (555) 456-7890' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (name === 'location') {
      const location = locations.find(loc => loc.id === parseInt(value));
      setSelectedLocation(location);
    }
  };

  const handleSubmit = () => {
    if (!formData.email || !formData.datetime || !formData.phone || !formData.location) {
      alert('Please fill in all fields');
      return;
    }
    
    // Generate and download meal ticket
    const ticketData = {
      ...formData,
      location: selectedLocation,
      ticketId: 'TICKET-' + Date.now(),
      generatedAt: new Date().toLocaleString()
    };
    
    const dataStr = JSON.stringify(ticketData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `meal-ticket-${ticketData.ticketId}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  // Simple map component (placeholder - in real app you'd use Google Maps API)
  const MapComponent = ({ location }) => {
    return (
      <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-gray-200">
        {location ? (
          <div className="text-center">
            <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-2" />
            <h3 className="font-semibold text-lg">{location.name}</h3>
            <p className="text-gray-600">{location.address}</p>
            <p className="text-gray-500 mt-2">
              <Phone className="w-4 h-4 inline mr-1" />
              {location.phone}
            </p>
            <div className="mt-2 text-sm text-gray-500">
              Coordinates: {location.lat}, {location.lng}
            </div>
          </div>
        ) : (
          <div className="text-center text-gray-500">
            <MapPin className="w-12 h-12 mx-auto mb-2" />
            <p>Select a location to view map</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className='w-full min-h-screen bg-gray-50 py-8 real-font'>
      <div className="max-w-6xl mx-auto px-4">
        
        {/* First Row - Content */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              You can make bookings at a location near you
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Fill the form and download your meal ticket to be tendered at the location. 
              Choose from our convenient locations and secure your dining experience.
            </p>
          </div>
        </div>

        {/* Second Row - Form and Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Form Section */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
              <Calendar className="w-6 h-6 mr-2 text-blue-600" />
              Book Your Reservation
            </h2>
            
            <div className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  <Mail className="w-4 h-4 inline mr-1" />
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="datetime" className="block text-sm font-medium text-gray-700 mb-2">
                  <Calendar className="w-4 h-4 inline mr-1" />
                  Date and Time
                </label>
                <input
                  type="datetime-local"
                  id="datetime"
                  name="datetime"
                  value={formData.datetime}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  <Phone className="w-4 h-4 inline mr-1" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                  <MapPin className="w-4 h-4 inline mr-1" />
                  Select Location
                </label>
                <select
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                >
                  <option value="">-- Select Location --</option>
                  {locations.map(location => (
                    <option key={location.id} value={location.id}>
                      {location.name} - {location.address}
                    </option>
                  ))}
                </select>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-cta text-white py-3 px-6 rounded-lg font-medium hover:bg-[#8bb962] transition-colors flex items-center justify-center"
              >
                <Download className="w-5 h-5 mr-2" />
                Generate & Download Meal Ticket
              </button>
            </div>
          </div>

          {/* Map Section */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
              <MapPin className="w-6 h-6 mr-2 text-blue-600" />
              Location Map
            </h2>
            
            <MapComponent location={selectedLocation} />
            
            {selectedLocation && (
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">Selected Location Details:</h3>
                <div className="space-y-1 text-sm">
                  <p><strong>Name:</strong> {selectedLocation.name}</p>
                  <p><strong>Address:</strong> {selectedLocation.address}</p>
                  <p><strong>Phone:</strong> {selectedLocation.phone}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* All Locations List */}
        <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">All Locations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {locations.map(location => (
              <div key={location.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-gray-800 mb-2">{location.name}</h3>
                <p className="text-sm text-gray-600 mb-1">{location.address}</p>
                <p className="text-sm text-gray-500 flex items-center">
                  <Phone className="w-3 h-3 mr-1" />
                  {location.phone}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;