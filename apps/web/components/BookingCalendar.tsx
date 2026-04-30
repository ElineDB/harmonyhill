// import BookingCalendarClient from "./BookingCalendarClient";
// import {toDateTime, today} from "@/packages/utils";
// import {makeAdapter, CollectionFilter} from "@/packages/database";

// interface BookingCalendarProp {
//     title: string
// }

// // todo: pass the booked dates down as a prop
// export default async function BookingCalendar({ title }: BookingCalendarProp) {
    
//     const adapter = await makeAdapter();

//     const getBookedDates = async(house : string) : Promise<number[]> => {
//         const todayDate = today();

//         const filters : CollectionFilter[] = [
//             ["house", "==", house.toLowerCase()],
//             ["checkOutAt", ">=", todayDate]
//         ];
//         const bookings = await adapter.get("bookings", filters);
//         //console.log(bookings);
    
//         let dates = [];
//         for(const booking of bookings) {
//             let cursor = toDateTime(booking.checkInAt);
//             if(!cursor) continue;

//             const end = toDateTime(booking.checkOutAt);
//             if(!end) continue;

//             while (cursor < end) {
//                 dates.push(cursor.toMillis());
//                 cursor = cursor.plus({ days: 1 });
//             }
//         }

//         return dates;
//     }

//     const bookedDatesSerialized = await getBookedDates(title);

//     return (
//         <div>
//             <h3>{title}</h3>
//             <BookingCalendarClient bookedDatesSerialized={bookedDatesSerialized} />
//         </div>
//     );
// }
