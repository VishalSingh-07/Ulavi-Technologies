import video1 from "../assets/Video/Video1.mp4";
import video2 from "../assets/Video/Video2.mp4";
import video3 from "../assets/Video/Video3.mp4";
import video4 from "../assets/Video/Video4.mp4";
const content = [
  {
    id: 1,
    title: "Universal Studios Singapore",
    imgURL:
      "https://res.klook.com/image/upload/c_fill,w_843,h_474/q_80/activities/ktvgpnwvcewzebykmcz0.webp",
    description:
      "Southeast Asia's first and only Universal Studios theme park, featuring thrilling rides, shows, and attractions based on popular films and TV shows",
    rating: "⭐ 4.8",
    price: "1799",
    videoURL: video1,
  },
  {
    id: 2,
    title: "Avatar: The Experience at Gardens by the Bay",
    imgURL:
      "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/w_800/activities/xtzrgvv5ypyuobx9uhty.webp",
    description:
      "Avatar: The Experience is now open through 30 September 2023, in Cloud Forest at Gardens by the Bay. This immersive walkthrough experience brings two worlds together and opens your eyes to the magniﬁcent story of AVATAR, the highest-grossing ﬁlm of all time",
    rating: "⭐ 4.7",
    price: "2136",
    videoURL: video2,
  },
  {
    id: 3,
    title: "Marina Bay Sands Skypark Observation Deck or Sampan Ride Ticket",
    imgURL:
      "https://res.klook.com/image/upload/c_fill,w_843,h_474/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/sdlood2rymimaznvt7yf.webp",
    description:
      "Soak in panoramic views of Singapore's iconic skyline at the Marina Bay Sands Skypark Observation Deck",
    rating: "⭐ 4.7",
    price: "1708",
    videoURL: video3,
  },
  {
    id: 4,
    title: "Jewel Changi Airport Attraction Ticket in Singapore",
    imgURL:
      "https://res.klook.com/image/upload/u_activities:eo9xj5btye4qqrp3b7yr,h_1.0,ar_960:460,c_scale,e_blur:10000/c_fill,w_843,h_474/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/eo9xj5btye4qqrp3b7yr.webp",
    description:
      "Explore one of the world's best airports when you visit Jewel Changi Airport in Singapore",
    rating: "⭐ 4.6",
    price: "366",
    videoURL: video4,
  },
  {
    id: 5,
    title: "Singapore Flyer Ticket",
    imgURL:
      "https://res.klook.com/image/upload/u_activities:t2cvzkaisyvjcgz52rlz,h_1.0,ar_960:460,c_scale,e_blur:10000/c_fill,w_843,h_474/q_80/activities/t2cvzkaisyvjcgz52rlz.webp",
    description:
      "Embark on a multisensory Singapore journey with Time Capsule as the starting point for an immersive experience of Singapore’s past, present and future. Guided by R65, a time travel robot, the journey showcases the nation’s transformation from its humble origins as a small idyllic island to the bustling global metropolis it is today.",
    rating: "⭐ 4.6",
    price: "2441",
    videoURL: video1,
  },
  {
    id: 6,
    title: "Singapore Cable Car Sky Pass",
    imgURL:
      "https://res.klook.com/image/upload/u_activities:ic8ug8bymgsexlfyr7kp,h_1.0,ar_16:9,c_scale,e_blur:10000/c_fill,w_843,h_474/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/ic8ug8bymgsexlfyr7kp.webp",
    description:
      "Relish gorgeous, 360-degree views of the country's southern regions with a Singapore Cable Car Sky Pass",
    rating: "⭐ 4.7",
    price: "1709",
    videoURL: video1,
  },
  {
    id: 7,
    title: "Private Singapore Changi Airport Transfers (SIN) for Singapore by Zenith",
    imgURL:
      "https://res.klook.com/image/upload/c_fill,w_1160,h_474/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/jf09iy8tfvmcuvxfknqk.webp",
    description:
      "Receive a convenient pick up service from the airport arrivals hall or your hotel lobby from your professional driver",
    rating: "⭐ 4.2",
    price: "2587",
    videoURL: video1,
  },
  {
    id: 8,
    title: "River Wonders Singapore Ticket",
    imgURL:
      "https://res.klook.com/image/upload/u_activities:c2gjn0qurbsh9rxkjjq1,h_1.0,ar_960:460,c_scale,e_blur:10000/c_fill,w_843,h_474/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/c2gjn0qurbsh9rxkjjq1.webp",
    description:
      "Inspired by the mighty rivers of the world, Singapore's Mandai River Wonders is Asia's first and only river themed wildlife park",
    rating: "⭐ 4.6",
    price: "3027",
    videoURL: video1,
  },
  {
    id: 9,
    title: "ArtScience Museum at Marina Bay Sands Ticket",
    imgURL:
      "https://res.klook.com/image/upload/u_activities:hn0x3xjtb6y1wxdhwvsi,h_1.0,ar_960:460,c_scale,e_blur:10000/c_fill,w_843,h_474/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/hn0x3xjtb6y1wxdhwvsi.webp",
    description:
      "Have an immersive, educational experience and learn about art, space, technology, and more at ArtScience Museum at Marina Bay Sands",
    rating: "⭐4.7",
    price: "1403",
    videoURL: video1,
  },
  {
    id: 10,
    title: "Singapore Travel Card (NETS FlashPay) (Singapore and Thailand Pick up)",
    imgURL:
      "https://res.klook.com/image/upload/c_fill,w_843,h_474/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/sij8tv4lgyrxhatjipr1.webp",
    description:
      "Enjoy hassle-free transportation during your trip to Singapore with a NETS FlashPay Card",
    rating: "⭐ 4.8",
    price: "732",
    videoURL: video1,
  },
  {
    id: 11,
    title:
      "Enjoy hassle-free transportation during your trip to Singapore with a NETS FlashPay Card",
    imgURL:
      "https://res.klook.com/image/upload/c_fill,w_843,h_474/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/lsn1xr4o0marlu26yf02.webp",
    description: "Discover Singapore in 30 minutes on land and 30 minutes on sea",
    rating: "⭐ 4.9",
    price: "999",
    videoURL: video1,
  },
  {
    id: 12,
    title: "Singapore River Cruise",
    imgURL:
      "https://res.klook.com/image/upload/c_fill,w_843,h_474/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/eyccdzp1k0vc8zkwdsrg.webp",
    description:
      "Marvel at the historical and modern buildings of the city during the 40-minute boat cruise",
    rating: "⭐ 4.9",
    price: "1587",
    videoURL: video1,
  },
];

export default content;
