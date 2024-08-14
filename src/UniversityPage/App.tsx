import React from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';

const App: React.FC = () => {
    const headerProps = {
        logo: 'https://cdn.builder.io/api/v1/image/assets/TEMP/64190692516fac83b6f501cc0d1abb4ca9a642c86a25eed37630a449d97e14e7?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87',
        menuItems: ['Home', 'My Courses', 'My Messages', 'Contact'],
    };

    const footerProps = {
        logo: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4991ca050b1de96082fad57e0bfdf877d2f3f6665f119331f4a8ad4b22adae63?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87',
        address: '210, Waiyaki Way',
        phone: '+25470000011',
        menuItems: ['Home', 'My Courses', 'My Messages', 'Contact'],
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Header {...headerProps} />
            <MainContent />
            <Footer {...footerProps} />
        </div>
    );
};

export default App;