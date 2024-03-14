import { useState } from "react";
import Course from "../Course/Course";
import { useEffect } from "react";
import Cart from "../Cart/Cart";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const totalCredits = 15; 

const Courses = () => {

    const [courses, setCourse] = useState([]);
    const [cart, setCart] = useState([]);
    const [credit, setCredit] = useState(0);
    const [price, setPrice] = useState(0);

    useEffect(() => {
        fetch('courses.json')
        .then(res => res.json())
        .then(data => setCourse(data))
    }, []);

    const handleSelect = course => {

        const isExists = cart.find(c => c.id === course.id)
        
        if(credit + course.credit > totalCredits){
            return toast.error("Only 13 Credits Allowed");
        }

        if(!isExists){
            toast.success("Successfully Added The Course");
            setCart([...cart, course]);
            setCredit( course.credit + credit);
            setPrice(course.price + price )
        }
        else {
            toast.warn("Course Already Selected");
        }
        
        
    }
    return (
        <div className="container mx-auto max-w-[1180px px-5">
            <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold my-8 md:my-14">Course Registration</h2>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-14">
                <div className="col-auto lg:col-span-9">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {
                    courses.map(course => <Course 
                        key={course.id}
                        course={course}
                        handleSelect={handleSelect}>
                        </Course>)
                   }
                  </div>

                </div>
                <div className="col-auto lg:col-span-3 b">
                    <Cart cart={cart} credit={credit} price={price}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Courses;