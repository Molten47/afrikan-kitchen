import type { Outlet } from "../types/Outlet";
import image1 from '../assets/restaurant-hall.jpg'
import image2 from '../assets/restaurant-interior.jpg'
import image3 from '../assets/restaurant-lots-table.jpg'
import image4 from '../assets/healthy-restaurant.jpg'

export const Outlets: Outlet[] = [
    {
    id: 1,
    branch:"Merseyside",
    image: image1,
    address:'42 Liverpool Lane, Toxteth Merseyside, L8 9DT',
    operating:'Mon-sat:09.00am - 09:00pm | Sundays: 11.00am - 9.00pm',
    contact: '+44 151 398 7621'
    },
    {
    id: 2,
    branch:"Oldham",
    image: image2,
    address:'21 Crompton Road, Chadderton Oldham, OL9 8BG',
    operating:'Mon-sat:09.00am - 09:00pm | Sundays: 11.00am - 9.00pm',
    contact:'+44 20 7946 2183'
    },
    {
    id: 3,
    branch:"London Coolney",
    image: image3,
    address:'7 Elmwood Close, Coolney Green Coolney, RH5 2PL',
    operating:'Mon-sat:09.00am - 09:00pm | Sundays: 11.00am - 9.00pm',
    contact: '+44 1293 502745'
    }

]