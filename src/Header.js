import React from 'react';
import './HeaderStyles.css';
import logo from './fulllogo.jpg';

function Header() {
    return (
        <div className= "234body">
        <div className="fixed-header">
            <div className="container">
                <div className="logoStyles"><img src={logo} width={140} height={140} /></div>
                <nav>
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    {/* <a href="#">Products</a>
                    <a href="#">Services</a>
                    <a href="#">Contact Us</a> */}
                </nav>
            </div>
        </div>
        {/* <div className="container">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. Vestibulum id metus ac nisl bibendum scelerisque non non purus. Suspendisse varius nibh non aliquet sagittis. In tincidunt orci sit amet elementum vestibulum. Vivamus fermentum in arcu in aliquam. Quisque aliquam porta odio in fringilla. Vivamus nisl leo, blandit at bibendum eu, tristique eget risus. Integer aliquet quam ut elit suscipit, id interdum neque porttitor. Integer faucibus ligula.</p>
            <p>Quis quam ut magna consequat faucibus. Pellentesque eget nisi a mi suscipit tincidunt. Ut tempus dictum risus. Pellentesque viverra sagittis quam at mattis. Suspendisse potenti. Aliquam sit amet gravida nibh, facilisis gravida odio. Phasellus auctor velit at lacus blandit, commodo iaculis justo viverra. Etiam vitae est arcu. Mauris vel congue dolor. Aliquam eget mi mi. Fusce quam tortor, commodo ac dui quis, bibendum viverra erat. Maecenas mattis lectus enim, quis tincidunt dui molestie euismod. Curabitur et diam tristique, accumsan nunc eu, hendrerit tellus.</p>
        </div>    
        <div className="fixed-footer">
            <div className="container">Copyright &copy; 2016 Your Company</div>        
        </div> */}
    </div>
    );
}

export default Header;
