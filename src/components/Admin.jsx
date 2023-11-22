// import { useEffect, useMemo, useState } from "react";
// import { supabase } from "../lib/supabase";
// import toast from "react-hot-toast";

// export default function Admin() {
//   const [messages, setMessages] = useState([]);
//   const [reply, setReply] = useState("");
//   const [selectedId, setSelectedId] = useState();

//   const repliedMessages = useMemo(() => {
//     return messages.filter((message) => !!message.reply);
//   }, [messages]);

//   const unrepliedMessages = useMemo(() => {
//     return messages.filter((message) => !message.reply);
//   }, [messages]);

//   const fetchData = async () => {
//     let { data: messages } = await supabase.from("messages").select("*");

//     setMessages(messages);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const handleReply = async () => {
//     await supabase.from("messages").update({ reply }).eq("id", selectedId).select();
//     toast.success("Replied successfully!");
//     setReply("");
//     setSelectedId("");
//     fetchData();
//   };

//   const handleDelete = async (id) => {
//     await supabase.from("messages").delete().eq("id", id);
//     toast.success("Replied deleted!");
//     fetchData();
//   };

//   return (
//     <section className="min-h-[100svh] px-8 py-20 flex flex-col relative gap-4 items-center overflow-hidden bg-[#822223]">
//       <img src="/orn-flower-1.png" alt="" className="absolute top-0 w-40 -left-8" />
//       <img src="/orn-flower-3.png" alt="" className="absolute w-32 top-4 -right-8" />

//       <div className="flex flex-col text-center text-[#ece5db]">
//         <h2 className="text-4xl">RSVP Admin</h2>
//         <p className="opacity-50">Reply with sincerity.</p>
//       </div>

//       <div className="z-20 space-y-2">
//         {unrepliedMessages.map((message) => {
//           const handleClickEdit = () => {
//             if (selectedId) {
//               handleReply(message.id);
//               return;
//             }

//             setSelectedId(message.id);
//             if (message.reply) setReply(message.reply);
//           };

//           return (
//             <div key={message.id} className="bg-white p-2.5 rounded-lg w-full">
//               <div className="flex items-center justify-between gap-2 mb-1 text-xs">
//                 <h3 className="font-semibold">{message.name}</h3>
//                 {message.attendance === "tidak_hadir" && (
//                   <span className="flex items-center gap-1  mr-1.5 text-[.65rem] opacity-75">
//                     Belum Hadir
//                   </span>
//                 )}

//                 {message.attendance === "hadir" && (
//                   <span className="flex items-center gap-1  mr-1.5">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width={24}
//                       height={24}
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth={2}
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="w-3 h-3"
//                     >
//                       <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
//                       <path d="m9 12 2 2 4-4" />
//                     </svg>
//                     <span className="text-[.65rem]">Hadir</span>
//                   </span>
//                 )}
//               </div>
//               <p className="mb-2 text-xs">{message.message}</p>

//               <div className="flex flex-col gap-2">
//                 {selectedId === message.id && !message.reply && (
//                   <textarea
//                     id="ucapan"
//                     name="message"
//                     rows={4}
//                     className="block p-2.5 w-full text-xs bg-white rounded-lg border border-[#822223] focus-visible:outline-[#822223] outline-1"
//                     placeholder="Berikan ucapan dan doa restu"
//                     required
//                     value={reply}
//                     onChange={(e) => setReply(e.target.value)}
//                   />
//                 )}

//                 <div className="flex gap-1">
//                   {!message.reply && (
//                     <button
//                       className="self-start text-[#822223] active:text-white hover:text-white border border-[#822223] hover:bg-[#52331a] font-medium rounded-lg px-3 py-1 inline-flex text-xs"
//                       onClick={handleClickEdit}
//                     >
//                       Balas
//                     </button>
//                   )}

//                   <button
//                     className="self-start text-[#822223] active:text-white hover:text-white border border-[#822223] hover:bg-[#52331a] font-medium rounded-lg px-3 py-1 inline-flex text-xs"
//                     onClick={() => handleDelete(message.id)}
//                   >
//                     Hapus
//                   </button>
//                 </div>
//               </div>

//               {message.reply && (
//                 <>
//                   <div className="w-full h-[1px] bg-[#ece5db] my-3"></div>

//                   <div className="flex flex-col items-end w-full gap-1 ml-auto text-xs text-right">
//                     <div className="flex gap-1">
//                       <img
//                         src="/section-1.jpg"
//                         alt=""
//                         className="object-cover w-5 h-5 rounded-full"
//                       />
//                       <h3>Nova &amp; Fadli</h3>
//                     </div>
//                     <p>{message.reply}</p>

//                     <div className="flex flex-col w-full gap-1">
//                       {selectedId === message.id && (
//                         <textarea
//                           id="ucapan"
//                           name="message"
//                           rows={4}
//                           className="text-xs block p-2.5 w-full bg-white rounded-lg border border-[#822223] focus-visible:outline-[#822223] outline-1"
//                           placeholder="Berikan ucapan dan doa restu"
//                           required
//                           value={reply}
//                           onChange={(e) => setReply(e.target.value)}
//                         />
//                       )}

//                       <button
//                         className="self-start text-[#822223] active:text-white hover:text-white border border-[#822223] hover:bg-[#52331a] font-medium rounded-lg px-3 py-1 inline-flex text-xs"
//                         onClick={handleClickEdit}
//                       >
//                         Edit
//                       </button>
//                     </div>
//                   </div>
//                 </>
//               )}
//             </div>
//           );
//         })}

//         {repliedMessages.map((message) => {
//           const handleClickEdit = () => {
//             if (selectedId) {
//               handleReply(message.id);
//               return;
//             }

//             setSelectedId(message.id);
//             if (message.reply) setReply(message.reply);
//           };

//           return (
//             <div key={message.id} className="bg-white p-2.5 rounded-lg w-full">
//               <div className="flex items-center justify-between gap-2 mb-1 text-xs">
//                 <h3 className="font-semibold">{message.name}</h3>
//                 {message.attendance === "tidak_hadir" && (
//                   <span className="flex items-center gap-1  mr-1.5 text-[.65rem] opacity-75">
//                     Belum Hadir
//                   </span>
//                 )}

//                 {message.attendance === "hadir" && (
//                   <span className="flex items-center gap-1  mr-1.5">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width={24}
//                       height={24}
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth={2}
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="w-3 h-3"
//                     >
//                       <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
//                       <path d="m9 12 2 2 4-4" />
//                     </svg>
//                     <span className="text-[.65rem]">Hadir</span>
//                   </span>
//                 )}
//               </div>
//               <p className="mb-2 text-xs">{message.message}</p>

//               <div className="flex flex-col gap-2">
//                 {selectedId === message.id && !message.reply && (
//                   <textarea
//                     id="ucapan"
//                     name="message"
//                     rows={4}
//                     className="block p-2.5 w-full text-xs bg-white rounded-lg border border-[#822223] focus-visible:outline-[#822223] outline-1"
//                     placeholder="Berikan ucapan dan doa restu"
//                     required
//                     value={reply}
//                     onChange={(e) => setReply(e.target.value)}
//                   />
//                 )}

//                 {!message.reply && (
//                   <button
//                     className="self-start text-[#822223] active:text-white hover:text-white border border-[#822223] hover:bg-[#52331a] font-medium rounded-lg px-3 py-1 inline-flex text-xs"
//                     onClick={handleClickEdit}
//                   >
//                     Balas
//                   </button>
//                 )}
//               </div>

//               {message.reply && (
//                 <>
//                   <div className="w-full h-[1px] bg-[#ece5db] my-3"></div>

//                   <div className="flex flex-col items-end w-full gap-1 ml-auto text-xs text-right">
//                     <div className="flex gap-1">
//                       <img
//                         src="/section-1.jpg"
//                         alt=""
//                         className="object-cover w-5 h-5 rounded-full"
//                       />
//                       <h3>Nova &amp; Fadli</h3>
//                     </div>
//                     <p>{message.reply}</p>

//                     <div className="flex flex-col w-full gap-1">
//                       {selectedId === message.id && (
//                         <textarea
//                           id="ucapan"
//                           name="message"
//                           rows={4}
//                           className="text-xs block p-2.5 w-full bg-white rounded-lg border border-[#822223] focus-visible:outline-[#822223] outline-1"
//                           placeholder="Berikan ucapan dan doa restu"
//                           required
//                           value={reply}
//                           onChange={(e) => setReply(e.target.value)}
//                         />
//                       )}

//                       <div className="flex gap-1">
//                         <button
//                           className="self-start text-[#822223] active:text-white hover:text-white border border-[#822223] hover:bg-[#52331a] font-medium rounded-lg px-3 py-1 inline-flex text-xs"
//                           onClick={handleClickEdit}
//                         >
//                           Edit
//                         </button>

//                         <button
//                           className="self-start text-[#822223] active:text-white hover:text-white border border-[#822223] hover:bg-[#52331a] font-medium rounded-lg px-3 py-1 inline-flex text-xs"
//                           onClick={() => handleDelete(message.id)}
//                         >
//                           Hapus
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }
