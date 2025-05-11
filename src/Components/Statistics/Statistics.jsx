import { ComposedChart, Bar, Area, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

export default function Statistics() {
  // Sample data for the chart
  const data = [
  { name: "Dell Inspiron 15", price: 550, rating: 4.5 },
  { name: "HP Pavilion 14", price: 620, rating: 4.7 },
  { name: "MacBook Air M2", price: 999, rating: 4.8 },
  { name: "Lenovo IdeaPad Flex 5", price: 580, rating: 4.3 },
  { name: "Asus VivoBook 15", price: 510, rating: 4.2 },
  { name: "Acer Aspire 7", price: 570, rating: 4.6 },
  { name: "iPhone 14", price: 799, rating: 4.9 },
  { name: "Samsung Galaxy S22", price: 850, rating: 4.7 },
  { name: "Google Pixel 6", price: 599, rating: 4.5 },
  { name: "Logitech MX Master 3", price: 99, rating: 4.8 },
  { name: "Anker Soundcore Headphones", price: 69, rating: 4.4 },
  { name: "Samsung Galaxy Buds Pro", price: 199, rating: 4.6 },
  { name: "Apple AirPods Pro", price: 249, rating: 4.7 },
  { name: "Apple iPad Pro 11", price: 799, rating: 4.9 },
  { name: "Samsung Galaxy Tab S8", price: 699, rating: 4.8 },
];


  return (
    <div>
      {/* Header Section */}
      <div className="bg-purple-600 text-white py-10 text-center rounded-2xl">
        <h1 className="text-3xl font-bold mb-4">Gadget Statistics</h1>
        <p className="mb-6 max-w-xl mx-auto">
          Discover detailed insights and data about the latest gadgets. Stay informed and make smarter choices with our comprehensive statistics!
        </p>
      </div>

      {/* Chart Section */}
      <div className="mt-10">
        <ResponsiveContainer width="95%" height={400}>
          <ComposedChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="price" fill="#8884d8" stroke="#8884d8" />
            <Bar dataKey="price" barSize={20} fill="#413ea0" />
            <Scatter dataKey="rating" fill="red" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

