// Main.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Main.css';
import { useNavigate, useLocation } from 'react-router-dom';
import car1 from './Assets/car1.jpg';
import car2 from './Assets/car2.jpg';
import car3 from './Assets/car3.png';
import car4 from './Assets/car4.png';
import car5 from './Assets/car5.jpg';
import car6 from './Assets/car6.png';

const Main = () => {
  const [cars, setCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/cars');
        setCars(response.data);
      } catch (error) {
        console.error('Error fetching cars:', error);
      }
    };

    fetchData();
  }, []);

  const handleSeeDetails = (carId) => {
    const selected = cars.find((car) => car.id === carId);
    setSelectedCar(selected);
    navigate(`/details/${carId}`, { state: { image: getCarImage(carId) } });
  };

  const handleBuyClick = (carId) => {
    const selected = cars.find((car) => car.id === carId);
    setSelectedCar(selected);
    navigate(`/details/${carId}`, { state: { image: getCarImage(carId) } });
  };

  const totalPageCount = Math.ceil(cars.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedCars = cars.slice(startIndex, endIndex);

  const getCarImage = (carId) => {
    switch (carId) {
      case 1:
        return car1;
      case 2:
        return car2;
      case 3:
        return car3;
      case 4:
        return car4;
      case 5:
        return car5;
      case 6:
        return car6;
      default:
        return ''; // You may want to provide a default image or handle this case based on your requirements
    }
  };

  const handlePreviousClick = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextClick = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPageCount));
  };

  return (
    <div className="container">
      {selectedCar ? (
        <div className={`car${selectedCar.id}`}>
          <h3>{selectedCar.brand}</h3>
          <img src={location.state ? location.state.image : ''} alt="" className={`car${selectedCar.id}-image`} />
          <div className={`car${selectedCar.id}info`}>
            <p>Brand: {selectedCar.brand}</p>
            <p>Type: {selectedCar.type}</p>
            <p>Model: {selectedCar.model}</p>
            <p>Price: {selectedCar.price}</p>
            <button onClick={() => handleBuyClick(selectedCar.id)}>Buy</button>
          </div>
        </div>
      ) : (
        displayedCars.map((car) => (
          <div key={car.id} className={`car${car.id}`} onClick={() => handleSeeDetails(car.id)}>
            <h3>{car.brand}</h3>
            <img src={getCarImage(car.id)} alt="" className={`car${car.id}-image`} />
            <div className={`car${car.id}info`}>
              <p>Brand: {car.brand}</p>
              <p>Type: {car.type}</p>
              <p>Model: {car.model}</p>
              <p>Price: {car.price}</p>
              <button onClick={() => handleBuyClick(car.id)}>Buy</button>
            </div>
          </div>
        ))
      )}
      <div className="pagination">
        <button onClick={handlePreviousClick} disabled={currentPage === 1}>
          Previous
        </button>
        <button onClick={handleNextClick} disabled={currentPage === totalPageCount}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Main;
