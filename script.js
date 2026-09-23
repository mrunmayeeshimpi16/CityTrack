/* ============================================================
   CityTrack — Full Logic
   Nashik City · 110+ vehicles · Firebase-ready structure
   ============================================================ */

// ============================================================
// NASHIK AREAS (real coordinates)
// ============================================================
const AREAS = {
    cbs: { name: 'CBS', lat: 19.9945, lon: 73.7898 },
    panchavati: { name: 'Panchavati', lat: 20.0070, lon: 73.7994 },
    nashikRoad: { name: 'Nashik Road', lat: 19.9476, lon: 73.8409 },
    cidco: { name: 'CIDCO', lat: 19.9685, lon: 73.7620 },
    satpur: { name: 'Satpur', lat: 19.9585, lon: 73.7410 },
    ashokNagar: { name: 'Ashok Nagar', lat: 19.9860, lon: 73.7770 },
    gangapurRoad: { name: 'Gangapur Road', lat: 20.0140, lon: 73.8100 },
    collegeRoad: { name: 'College Road', lat: 20.0105, lon: 73.8150 },
    mahatmaNagar: { name: 'Mahatma Nagar', lat: 20.0205, lon: 73.8250 },
    raganapura: { name: 'Raganapura', lat: 19.9950, lon: 73.8130 },
    govindNagar: { name: 'Govind Nagar', lat: 20.0210, lon: 73.8410 },
    dwarka: { name: 'Dwarka', lat: 19.9920, lon: 73.7830 },
    mumbaiNaka: { name: 'Mumbai Naka', lat: 19.9700, lon: 73.7690 },
    adgaon: { name: 'Adgaon', lat: 20.0010, lon: 73.8420 },
    indiraNagar: { name: 'Indira Nagar', lat: 20.0080, lon: 73.8195 }
};
// ============================================================
// DRIVER FULL NAMES
// ============================================================
const DRIVERS = [
    'Rajesh Patil', 'Priya Sharma', 'Amit Deshmukh', 'Sneha Joshi', 'Vikram Shinde',
    'Anita Kadam', 'Manoj More', 'Sunita Pawar', 'Ganesh More', 'Lata Bhosale',
    'Ravi Patil', 'Kiran Gaikwad', 'Suresh Ahire', 'Meena Jadhav', 'Ramesh Pawar',
    'Suresh Kadam', 'Ganesh Kadhe', 'Prakash Nikam', 'Sanjay Tiwari', 'Neha Gupta',
    'Ravi Shinde', 'Priya Kulkarni', 'Amit Desai', 'Sneha Jadhav', 'Rahul Patil',
    'Mrunal Deshmukh', 'Rahul Yadav', 'Vikram Singh', 'Suresh Patil', 'Manoj Sharma',
    'Deepak Wagh', 'Akshay Chavan', 'Sagar Pawar', 'Yogesh Bhadane', 'Pravin Deore',
];

// ============================================================
// TRAIN JOURNEYS (realistic — Nashik Road is a halt)
// ============================================================
const TRAIN_JOURNEYS = [
    {
        name: 'Panchavati Express', number: '12109', from: 'Mumbai CSMT', to: 'Manmad',
        stops: [
            { station: 'Mumbai CSMT', lat: 19.0470, lon: 72.8787, arrival: '05:10 AM', departure: '05:10 AM' },
            { station: 'Dadar', lat: 19.0180, lon: 72.8440, arrival: '05:22 AM', departure: '05:24 AM' },
            { station: 'Thane', lat: 19.2183, lon: 72.9781, arrival: '05:50 AM', departure: '05:52 AM' },
            { station: 'Kalyan', lat: 19.2437, lon: 73.1355, arrival: '06:10 AM', departure: '06:12 AM' },
            { station: 'Igatpuri', lat: 19.6967, lon: 73.5620, arrival: '07:05 AM', departure: '07:07 AM' },
            { station: 'Nashik Road', lat: 19.9476, lon: 73.8409, arrival: '07:32 AM', departure: '07:35 AM' },
            { station: 'Niphad', lat: 20.0480, lon: 74.0200, arrival: '08:05 AM', departure: '08:07 AM' },
            { station: 'Lasalgaon', lat: 20.1490, lon: 74.2280, arrival: '08:25 AM', departure: '08:27 AM' },
            { station: 'Manmad', lat: 20.2500, lon: 74.4700, arrival: '09:10 AM', departure: '09:15 AM' }
        ]
    },
    {
        name: 'Godavari Express', number: '17057', from: 'Mumbai CSMT', to: 'Hyderabad',
        stops: [
            { station: 'Mumbai CSMT', lat: 19.0470, lon: 72.8787, arrival: '07:15 AM', departure: '07:15 AM' },
            { station: 'Dadar', lat: 19.0180, lon: 72.8440, arrival: '07:28 AM', departure: '07:30 AM' },
            { station: 'Thane', lat: 19.2183, lon: 72.9781, arrival: '07:55 AM', departure: '07:57 AM' },
            { station: 'Kalyan', lat: 19.2437, lon: 73.1355, arrival: '08:15 AM', departure: '08:17 AM' },
            { station: 'Igatpuri', lat: 19.6967, lon: 73.5620, arrival: '09:15 AM', departure: '09:17 AM' },
            { station: 'Nashik Road', lat: 19.9476, lon: 73.8409, arrival: '09:42 AM', departure: '09:45 AM' },
            { station: 'Manmad', lat: 20.2500, lon: 74.4700, arrival: '11:20 AM', departure: '11:25 AM' },
            { station: 'Aurangabad', lat: 19.8762, lon: 75.3433, arrival: '01:30 PM', departure: '01:35 PM' },
            { station: 'Hyderabad', lat: 17.3850, lon: 78.4867, arrival: '09:00 PM', departure: '09:05 PM' }
        ]
    },
    {
        name: 'Tapovan Express', number: '17617', from: 'Mumbai CSMT', to: 'Nanded',
        stops: [
            { station: 'Mumbai CSMT', lat: 19.0470, lon: 72.8787, arrival: '05:10 AM', departure: '05:10 AM' },
            { station: 'Dadar', lat: 19.0180, lon: 72.8440, arrival: '05:22 AM', departure: '05:24 AM' },
            { station: 'Thane', lat: 19.2183, lon: 72.9781, arrival: '05:50 AM', departure: '05:52 AM' },
            { station: 'Kalyan', lat: 19.2437, lon: 73.1355, arrival: '06:10 AM', departure: '06:12 AM' },
            { station: 'Igatpuri', lat: 19.6967, lon: 73.5620, arrival: '07:05 AM', departure: '07:07 AM' },
            { station: 'Nashik Road', lat: 19.9476, lon: 73.8409, arrival: '07:32 AM', departure: '07:35 AM' },
            { station: 'Manmad', lat: 20.2500, lon: 74.4700, arrival: '09:10 AM', departure: '09:15 AM' },
            { station: 'Aurangabad', lat: 19.8762, lon: 75.3433, arrival: '11:00 AM', departure: '11:05 AM' },
            { station: 'Nanded', lat: 19.1383, lon: 77.3210, arrival: '04:00 PM', departure: '04:05 PM' }
        ]
    },
    {
        name: 'Rajya Rani Express', number: '11025', from: 'Mumbai CSMT', to: 'Sainagar Shirdi',
        stops: [
            { station: 'Mumbai CSMT', lat: 19.0470, lon: 72.8787, arrival: '07:30 PM', departure: '07:30 PM' },
            { station: 'Dadar', lat: 19.0180, lon: 72.8440, arrival: '07:42 PM', departure: '07:44 PM' },
            { station: 'Thane', lat: 19.2183, lon: 72.9781, arrival: '08:10 PM', departure: '08:12 PM' },
            { station: 'Kalyan', lat: 19.2437, lon: 73.1355, arrival: '08:30 PM', departure: '08:32 PM' },
            { station: 'Igatpuri', lat: 19.6967, lon: 73.5620, arrival: '09:25 PM', departure: '09:27 PM' },
            { station: 'Nashik Road', lat: 19.9476, lon: 73.8409, arrival: '09:50 PM', departure: '09:55 PM' },
            { station: 'Manmad', lat: 20.2500, lon: 74.4700, arrival: '11:20 PM', departure: '11:25 PM' },
            { station: 'Sainagar Shirdi', lat: 19.7660, lon: 74.4770, arrival: '12:30 AM', departure: '12:35 AM' }
        ]
    },
    {
        name: 'Janshatabdi Express', number: '12027', from: 'Mumbai CSMT', to: 'Sainagar Shirdi',
        stops: [
            { station: 'Mumbai CSMT', lat: 19.0470, lon: 72.8787, arrival: '11:00 AM', departure: '11:00 AM' },
            { station: 'Dadar', lat: 19.0180, lon: 72.8440, arrival: '11:12 AM', departure: '11:14 AM' },
            { station: 'Thane', lat: 19.2183, lon: 72.9781, arrival: '11:40 AM', departure: '11:42 AM' },
            { station: 'Kalyan', lat: 19.2437, lon: 73.1355, arrival: '12:00 PM', departure: '12:02 PM' },
            { station: 'Igatpuri', lat: 19.6967, lon: 73.5620, arrival: '01:05 PM', departure: '01:07 PM' },
            { station: 'Nashik Road', lat: 19.9476, lon: 73.8409, arrival: '01:30 PM', departure: '01:35 PM' },
            { station: 'Manmad', lat: 20.2500, lon: 74.4700, arrival: '03:00 PM', departure: '03:05 PM' },
            { station: 'Sainagar Shirdi', lat: 19.7660, lon: 74.4770, arrival: '04:30 PM', departure: '04:35 PM' }
        ]
    },
    {
        name: 'Sahyadri Express', number: '11023', from: 'Mumbai CSMT', to: 'Pune',
        stops: [
            { station: 'Mumbai CSMT', lat: 19.0470, lon: 72.8787, arrival: '10:50 PM', departure: '10:50 PM' },
            { station: 'Dadar', lat: 19.0180, lon: 72.8440, arrival: '11:02 PM', departure: '11:04 PM' },
            { station: 'Thane', lat: 19.2183, lon: 72.9781, arrival: '11:30 PM', departure: '11:32 PM' },
            { station: 'Kalyan', lat: 19.2437, lon: 73.1355, arrival: '11:50 PM', departure: '11:52 PM' },
            { station: 'Igatpuri', lat: 19.6967, lon: 73.5620, arrival: '12:55 AM', departure: '12:57 AM' },
            { station: 'Nashik Road', lat: 19.9476, lon: 73.8409, arrival: '01:20 AM', departure: '01:25 AM' },
            { station: 'Pune', lat: 18.5204, lon: 73.8567, arrival: '06:00 AM', departure: '06:05 AM' }
        ]
    },
    {
        name: 'Nandigram Express', number: '11401', from: 'Mumbai CSMT', to: 'Nagpur',
        stops: [
            { station: 'Mumbai CSMT', lat: 19.0470, lon: 72.8787, arrival: '04:05 PM', departure: '04:05 PM' },
            { station: 'Dadar', lat: 19.0180, lon: 72.8440, arrival: '04:17 PM', departure: '04:19 PM' },
            { station: 'Thane', lat: 19.2183, lon: 72.9781, arrival: '04:45 PM', departure: '04:47 PM' },
            { station: 'Kalyan', lat: 19.2437, lon: 73.1355, arrival: '05:05 PM', departure: '05:07 PM' },
            { station: 'Igatpuri', lat: 19.6967, lon: 73.5620, arrival: '06:15 PM', departure: '06:17 PM' },
            { station: 'Nashik Road', lat: 19.9476, lon: 73.8409, arrival: '06:40 PM', departure: '06:45 PM' },
            { station: 'Manmad', lat: 20.2500, lon: 74.4700, arrival: '08:15 PM', departure: '08:20 PM' },
            { station: 'Aurangabad', lat: 19.8762, lon: 75.3433, arrival: '10:00 PM', departure: '10:05 PM' },
            { station: 'Nagpur', lat: 21.1458, lon: 79.0882, arrival: '08:00 AM', departure: '08:05 AM' }
        ]
    },
    {
        name: 'Vidarbha Express', number: '12105', from: 'Mumbai CSMT', to: 'Gondia',
        stops: [
            { station: 'Mumbai CSMT', lat: 19.0470, lon: 72.8787, arrival: '07:05 PM', departure: '07:05 PM' },
            { station: 'Dadar', lat: 19.0180, lon: 72.8440, arrival: '07:17 PM', departure: '07:19 PM' },
            { station: 'Thane', lat: 19.2183, lon: 72.9781, arrival: '07:45 PM', departure: '07:47 PM' },
            { station: 'Kalyan', lat: 19.2437, lon: 73.1355, arrival: '08:05 PM', departure: '08:07 PM' },
            { station: 'Igatpuri', lat: 19.6967, lon: 73.5620, arrival: '09:15 PM', departure: '09:17 PM' },
            { station: 'Nashik Road', lat: 19.9476, lon: 73.8409, arrival: '09:40 PM', departure: '09:45 PM' },
            { station: 'Manmad', lat: 20.2500, lon: 74.4700, arrival: '11:15 PM', departure: '11:20 PM' },
            { station: 'Nagpur', lat: 21.1458, lon: 79.0882, arrival: '09:30 AM', departure: '09:35 AM' },
            { station: 'Gondia', lat: 21.4624, lon: 80.1961, arrival: '12:30 PM', departure: '12:35 PM' }
        ]
    },
    {
        name: 'Punjab Mail', number: '12137', from: 'Mumbai CSMT', to: 'Firozpur',
        stops: [
            { station: 'Mumbai CSMT', lat: 19.0470, lon: 72.8787, arrival: '07:35 PM', departure: '07:35 PM' },
            { station: 'Dadar', lat: 19.0180, lon: 72.8440, arrival: '07:47 PM', departure: '07:49 PM' },
            { station: 'Thane', lat: 19.2183, lon: 72.9781, arrival: '08:15 PM', departure: '08:17 PM' },
            { station: 'Kalyan', lat: 19.2437, lon: 73.1355, arrival: '08:35 PM', departure: '08:37 PM' },
            { station: 'Igatpuri', lat: 19.6967, lon: 73.5620, arrival: '09:50 PM', departure: '09:52 PM' },
            { station: 'Nashik Road', lat: 19.9476, lon: 73.8409, arrival: '10:15 PM', departure: '10:18 PM' },
            { station: 'Manmad', lat: 20.2500, lon: 74.4700, arrival: '11:55 PM', departure: '12:00 AM' },
            { station: 'New Delhi', lat: 28.6139, lon: 77.2090, arrival: '03:30 PM', departure: '03:45 PM' },
            { station: 'Firozpur', lat: 30.9331, lon: 74.6222, arrival: '11:00 PM', departure: '11:05 PM' }
        ]
    },
    {
        name: 'Karnataka Express', number: '12627', from: 'Mumbai CSMT', to: 'Bengaluru',
        stops: [
            { station: 'Mumbai CSMT', lat: 19.0470, lon: 72.8787, arrival: '07:20 PM', departure: '07:20 PM' },
            { station: 'Dadar', lat: 19.0180, lon: 72.8440, arrival: '07:32 PM', departure: '07:34 PM' },
            { station: 'Thane', lat: 19.2183, lon: 72.9781, arrival: '08:00 PM', departure: '08:02 PM' },
            { station: 'Kalyan', lat: 19.2437, lon: 73.1355, arrival: '08:20 PM', departure: '08:22 PM' },
            { station: 'Igatpuri', lat: 19.6967, lon: 73.5620, arrival: '09:25 PM', departure: '09:27 PM' },
            { station: 'Nashik Road', lat: 19.9476, lon: 73.8409, arrival: '09:50 PM', departure: '09:53 PM' },
            { station: 'Manmad', lat: 20.2500, lon: 74.4700, arrival: '11:20 PM', departure: '11:25 PM' },
            { station: 'Aurangabad', lat: 19.8762, lon: 75.3433, arrival: '01:20 AM', departure: '01:25 AM' },
            { station: 'Bengaluru', lat: 12.9716, lon: 77.5946, arrival: '06:00 AM', departure: '06:05 AM' }
        ]
    },
    {
        name: 'Lokmanya Tilak Express', number: '12141', from: 'Mumbai LTT', to: 'Manmad',
        stops: [
            { station: 'Mumbai LTT', lat: 19.0700, lon: 72.9000, arrival: '11:40 PM', departure: '11:40 PM' },
            { station: 'Dadar', lat: 19.0180, lon: 72.8440, arrival: '11:52 PM', departure: '11:54 PM' },
            { station: 'Thane', lat: 19.2183, lon: 72.9781, arrival: '12:20 AM', departure: '12:22 AM' },
            { station: 'Kalyan', lat: 19.2437, lon: 73.1355, arrival: '12:40 AM', departure: '12:42 AM' },
            { station: 'Igatpuri', lat: 19.6967, lon: 73.5620, arrival: '01:50 AM', departure: '01:52 AM' },
            { station: 'Nashik Road', lat: 19.9476, lon: 73.8409, arrival: '02:15 AM', departure: '02:18 AM' },
            { station: 'Manmad', lat: 20.2500, lon: 74.4700, arrival: '03:45 AM', departure: '03:50 AM' }
        ]
    },
    {
        name: 'Devagiri Express', number: '17057', from: 'Mumbai CSMT', to: 'Secunderabad',
        stops: [
            { station: 'Mumbai CSMT', lat: 19.0470, lon: 72.8787, arrival: '04:10 PM', departure: '04:10 PM' },
            { station: 'Dadar', lat: 19.0180, lon: 72.8440, arrival: '04:22 PM', departure: '04:24 PM' },
            { station: 'Thane', lat: 19.2183, lon: 72.9781, arrival: '04:50 PM', departure: '04:52 PM' },
            { station: 'Kalyan', lat: 19.2437, lon: 73.1355, arrival: '05:10 PM', departure: '05:12 PM' },
            { station: 'Igatpuri', lat: 19.6967, lon: 73.5620, arrival: '06:20 PM', departure: '06:22 PM' },
            { station: 'Nashik Road', lat: 19.9476, lon: 73.8409, arrival: '06:45 PM', departure: '06:50 PM' },
            { station: 'Manmad', lat: 20.2500, lon: 74.4700, arrival: '08:20 PM', departure: '08:25 PM' },
            { station: 'Aurangabad', lat: 19.8762, lon: 75.3433, arrival: '10:00 PM', departure: '10:05 PM' },
            { station: 'Secunderabad', lat: 17.4399, lon: 78.4983, arrival: '06:30 AM', departure: '06:35 AM' }
        ]
    }
];

// ============================================================
// BUS ROUTES (realistic Nashik City routes)
// ============================================================
const BUS_ROUTES = [
    { route: 'CBS → Nashik Road', stops: ['CBS', 'Dwarka', 'Mumbai Naka', 'Ashok Nagar', 'Nashik Road'], duration: '40 min' },
    { route: 'CBS → Panchavati', stops: ['CBS', 'Ravivar Peth', 'Panchavati'], duration: '20 min' },
    { route: 'CBS → CIDCO', stops: ['CBS', 'Dwarka', 'Indira Nagar', 'CIDCO'], duration: '30 min' },
    { route: 'CBS → Satpur', stops: ['CBS', 'Dwarka', 'Satpur'], duration: '35 min' },
    { route: 'CBS → Ashok Nagar', stops: ['CBS', 'Gangapur Road', 'Ashok Nagar'], duration: '25 min' },
    { route: 'CBS → Gangapur Road', stops: ['CBS', 'College Road', 'Gangapur Road'], duration: '30 min' },
    { route: 'CBS → Govind Nagar', stops: ['CBS', 'Gangapur Road', 'Govind Nagar'], duration: '28 min' },
    { route: 'CBS → Raganapura', stops: ['CBS', 'Dwarka', 'Raganapura'], duration: '22 min' },
    { route: 'CBS → Mahatma Nagar', stops: ['CBS', 'College Road', 'Mahatma Nagar'], duration: '26 min' },
    { route: 'CBS → College Road', stops: ['CBS', 'Gangapur Road', 'College Road'], duration: '24 min' },
    { route: 'Nashik Road → Panchavati', stops: ['Nashik Road', 'Ashok Nagar', 'Mumbai Naka', 'Panchavati'], duration: '30 min' },
    { route: 'CBS → Dwarka', stops: ['CBS', 'Ravivar Peth', 'Dwarka'], duration: '15 min' },
    { route: 'CBS → Mumbai Naka', stops: ['CBS', 'Dwarka', 'Mumbai Naka'], duration: '12 min' },
    { route: 'CBS → Adgaon', stops: ['CBS', 'Panchavati', 'Adgaon'], duration: '45 min' },
    { route: 'Panchavati → Satpur', stops: ['Panchavati', 'CBS', 'Dwarka', 'Satpur'], duration: '40 min' },
];

// ============================================================
// BUILD VEHICLES (110+)
// ============================================================
function rand(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function randInt(a, b) { return Math.floor(Math.random() * (b - a + 1)) + a; }
function jitter(base) { return (Math.random() - 0.5) * 0.02; }
function areaCoord(key) {
    const a = AREAS[key];
    return { lat: a.lat + jitter(), lon: a.lon + jitter() };
}

function makeVehicles() {
    const vehicles = [];
    const areaKeys = Object.keys(AREAS);

    // ============ TRAINS (12) — Only at Nashik Road ============
    TRAIN_JOURNEYS.forEach((tj, i) => {
        const statuses = ['active', 'active', 'active', 'delayed'];
        const status = i % 4 === 3 ? 'delayed' : 'active';
        const curIdx = 5; // Nashik Road is stop index 5
        const stop = tj.stops[curIdx];
        const nextStop = tj.stops[curIdx + 1] || stop;
        vehicles.push({
            id: tj.name, type: 'train', icon: '🚆',
            route: `${tj.from} → ${tj.to}`,
            driver: 'Railway Crew',
            speed: status === 'delayed' ? 0 : randInt(45, 70),
            status: status,
            eta: status === 'delayed' ? 'Delayed 8 min' : 'On Time',
            lat: AREAS.nashikRoad.lat + jitter() * 0.3,
            lon: AREAS.nashikRoad.lon + jitter() * 0.3,
            number: tj.number,
            capacity: randInt(800, 1200),
            currentlyAt: stop.station,
            nextStop: nextStop.station,
            journey: tj,
            currentStopIndex: curIdx,
        });
    });

    // ============ BUSES (25) ============
    for (let i = 0; i < 25; i++) {
        const br = BUS_ROUTES[i % BUS_ROUTES.length];
        const startArea = br.stops[0].toLowerCase().replace(/ /g, '').replace('→', '');
        const areaKey = mapAreaName(br.stops[randInt(0, br.stops.length - 1)]);
        const c = areaCoord(areaKey);
        const statuses = ['active', 'active', 'active', 'active', 'delayed', 'idle'];
        const status = statuses[i % statuses.length];
        vehicles.push({
            id: `CityLink ${100 + i + 1}`, type: 'bus', icon: '🚌',
            route: br.route,
            driver: DRIVERS[i % DRIVERS.length],
            speed: status === 'idle' ? 0 : randInt(20, 45),
            status: status,
            eta: status === 'delayed' ? `Delayed ${randInt(5, 15)} min` : `${randInt(3, 12)} min`,
            lat: c.lat, lon: c.lon,
            number: `MH-15-CL-${1000 + i}`,
            capacity: 50,
            journey: { stops: br.stops.map((s, idx) => ({ station: s, arrival: timeStr(6 + Math.floor(idx / 2), idx * 8), departure: timeStr(6 + Math.floor(idx / 2), idx * 8 + 2) })) }
        });
    }

    // ============ AMBULANCES (8) ============
    for (let i = 0; i < 8; i++) {
        const key = areaKeys[i % areaKeys.length];
        const c = areaCoord(key);
        vehicles.push({
            id: `Nashik 108 Ambulance ${i + 1}`, type: 'ambulance', icon: '🚑',
            route: 'City-wide Emergency',
            driver: DRIVERS[(i + 15) % DRIVERS.length],
            speed: randInt(40, 60),
            status: i < 3 ? 'emergency' : 'active',
            eta: `${randInt(2, 8)} min`,
            lat: c.lat, lon: c.lon,
            number: `MH-15-EM-${100 + i}`,
            capacity: 2,
        });
    }

    // ============ TRUCKS (15) ============
    for (let i = 0; i < 15; i++) {
        const key = areaKeys[(i * 2) % areaKeys.length];
        const c = areaCoord(key);
        const status = i % 5 === 0 ? 'idle' : 'active';
        vehicles.push({
            id: `Nashik Logistics ${200 + i + 1}`, type: 'truck', icon: '🚛',
            route: `Warehouse → Zone ${i + 1}`,
            driver: DRIVERS[(i + 25) % DRIVERS.length],
            speed: status === 'idle' ? 0 : randInt(20, 40),
            status: status,
            eta: status === 'idle' ? 'N/A' : `${randInt(10, 25)} min`,
            lat: c.lat, lon: c.lon,
            number: `MH-15-TR-${1000 + i}`,
            capacity: randInt(500, 1500),
        });
    }

    // ============ CABS (25) — Mini, Sedan, SUV ============
    const cabTypes = ['Ola Mini', 'Ola Sedan', 'Ola Prime Sedan', 'Ola Prime SUV'];
    const cabCap = { 'Ola Mini': 4, 'Ola Sedan': 4, 'Ola Prime Sedan': 4, 'Ola Prime SUV': 7 };
    const cabRoutes = [
        'Airport → City Center', 'Railway Station → CBS', 'CIDCO → Airport',
        'Panchavati → CBS', 'Mahatma Nagar → Railway Station', 'Satpur → CBS',
        'Gangapur Road → Airport', 'Raganapura → City Center',
    ];
    for (let i = 0; i < 25; i++) {
        const key = areaKeys[(i * 3) % areaKeys.length];
        const c = areaCoord(key);
        const cabType = cabTypes[i % cabTypes.length];
        const statuses = ['active', 'active', 'booked', 'booked', 'idle'];
        const status = statuses[i % statuses.length];
        vehicles.push({
            id: `${cabType} ${300 + i + 1}`, type: 'cab', icon: '🚗',
            route: cabRoutes[i % cabRoutes.length],
            driver: DRIVERS[(i + 5) % DRIVERS.length],
            speed: status === 'idle' ? 0 : randInt(25, 45),
            status: status,
            eta: status === 'idle' ? 'N/A' : `${randInt(5, 20)} min`,
            lat: c.lat, lon: c.lon,
            number: `MH-15-CB-${3000 + i}`,
            capacity: cabCap[cabType],
            cabType: cabType,
        });
    }

    // ============ AUTOS (30) ============
    for (let i = 0; i < 30; i++) {
        const key = areaKeys[(i * 5) % areaKeys.length];
        const c = areaCoord(key);
        const status = i % 6 === 0 ? 'idle' : 'active';
        vehicles.push({
            id: `Nashik Auto ${500 + i + 1}`, type: 'rickshaw', icon: '🛺',
            route: `Local ${AREAS[key].name}`,
            driver: DRIVERS[(i + 10) % DRIVERS.length],
            speed: status === 'idle' ? 0 : randInt(15, 30),
            status: status,
            eta: status === 'idle' ? 'N/A' : `${randInt(2, 10)} min`,
            lat: c.lat, lon: c.lon,
            number: `MH-15-AU-${5000 + i}`,
            capacity: 3,
        });
    }
        // Add driver ratings to all vehicles
    vehicles.forEach(v => {
        v.rating = (4.5 + Math.random() * 0.5).toFixed(1);
        v.experience = Math.floor(3 + Math.random() * 12);
        v.trips = Math.floor(100 + Math.random() * 400);
    });


    return vehicles;
}

function mapAreaName(name) {
    const map = {
        'CBS': 'cbs', 'Panchavati': 'panchavati', 'Nashik Road': 'nashikRoad',
        'CIDCO': 'cidco', 'Satpur': 'satpur', 'Ashok Nagar': 'ashokNagar',
        'Gangapur Road': 'gangapurRoad', 'College Road': 'collegeRoad',
        'Mahatma Nagar': 'mahatmaNagar', 'Raganapura': 'raganapura',
        'Govind Nagar': 'govindNagar', 'Dwarka': 'dwarka',
        'Mumbai Naka': 'mumbaiNaka', 'Adgaon': 'adgaon', 'Indira Nagar': 'indiraNagar',
        'Ravivar Peth': 'cbs',
    };
    return map[name] || 'cbs';
}

function timeStr(hour, min) {
    const h = ((hour - 1) % 12) + 1;
    const m = min.toString().padStart(2, '0');
    const ampm = hour < 12 ? 'AM' : 'PM';
    return `${h.toString().padStart(2, '0')}:${m} ${ampm}`;
}

// ============================================================
// STATE
// ============================================================
let VEHICLES = makeVehicles();
let currentUser = { name: 'Demo User', role: 'Citizen' };
let currentVehicleFilter = 'all';
let currentRouteFilter = 'all';
let currentAlertFilter = 'all';
let alertLog = [];
let dashMap = null, fullMap = null;
let dashMarkers = [], fullMarkers = [];
let chartStatus, chartType, chartSpeed, chartPerf;
let simulationTimer = null;
let refreshSeconds = 3;

// ============================================================
// LOGIN / LOGOUT
// ============================================================
function handleLogin() {
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value.trim();
    const role = document.getElementById('loginRole').value;

    if (!email || !password) {
        alert('Please enter email and password');
        return;
    }

    const { signInWithEmailAndPassword, createUserWithEmailAndPassword } = window.firebaseFns;
    const auth = window.firebaseAuth;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            currentUser.name = email.split('@')[0] || 'User';
            currentUser.role = role;
            document.getElementById('loginPage').style.display = 'none';
            document.getElementById('dashboardMain').style.display = 'flex';
            initDashboard();
        })
        .catch((error) => {
            if (error.code === 'auth/user-not-found' || error.code === 'auth/invalid-credential') {
                createUserWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                        currentUser.name = email.split('@')[0] || 'User';
                        currentUser.role = role;
                        document.getElementById('loginPage').style.display = 'none';
                        document.getElementById('dashboardMain').style.display = 'flex';
                        initDashboard();
                    })
                    .catch((err) => {
                        alert('Signup failed: ' + err.message);
                    });
            } else {
                alert('Login failed: ' + error.message);
            }
        });
}

// ============================================================
// INIT
// ============================================================
function initDashboard() {
    document.getElementById('profileName').textContent = capitalize(currentUser.name);
    document.getElementById('profileRole').textContent = currentUser.role;
    document.getElementById('currentRole').textContent = currentUser.role;

    generateAlerts();
    renderKPIs();
    renderDashboardMap();
    renderDashboardUpdates();
    attachNavHandlers();
    attachRoleMenu();
    attachSearch();
    startClock();
    startSimulation();
    updateBadges();
    // Save & Load alerts from Firebase
    setTimeout(() => {
        saveAlertsToFirebase();
        loadAlertsFromFirebase();
    }, 2000);

}

function capitalize(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

function updateBadges() {
    document.getElementById('vehCountBadge').textContent = VEHICLES.length;
    document.getElementById('delayBadge').textContent = VEHICLES.filter(v => v.status === 'delayed').length;
    document.getElementById('alertBadge').textContent = alertLog.filter(a => !a.read).length;
}

// ============================================================
// NAV
// ============================================================
function attachNavHandlers() {
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', () => switchPage(btn.dataset.page, btn));
    });
}

function switchPage(page, btn) {
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');

    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const target = document.getElementById('page-' + page);
    if (target) target.classList.add('active');

    if (page === 'map') renderFullMap();
    if (page === 'vehicles') renderVehiclesPage();
    if (page === 'routes') renderRoutesPage();
    if (page === 'delays') renderDelaysPage();
    if (page === 'alerts') renderAlertsPage();
    if (page === 'analytics') renderAnalytics();
}

function attachRoleMenu() {
    const switcher = document.getElementById('roleSwitch');
    switcher.addEventListener('click', (e) => {
        if (!e.target.closest('.role-menu')) switcher.classList.toggle('open');
    });
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.role-switch')) switcher.classList.remove('open');
    });
}

function switchRole(role) {
    currentUser.role = role;
    document.getElementById('currentRole').textContent = role;
    document.getElementById('profileRole').textContent = role;
    document.getElementById('roleSwitch').classList.remove('open');
}

// ============================================================
// CLOCK
// ============================================================
function startClock() {
    updateClock();
    setInterval(updateClock, 1000);
}
function updateClock() {
    const now = new Date();
    document.getElementById('clockTime').textContent = now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
    document.getElementById('clockDate').textContent = now.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
}

// ============================================================
// KPI
// ============================================================
function renderKPIs() {
    const total = VEHICLES.length;
    const active = VEHICLES.filter(v => v.status === 'active').length;
    const delayed = VEHICLES.filter(v => v.status === 'delayed').length;
    const emergency = VEHICLES.filter(v => v.status === 'emergency').length;
    const trains = VEHICLES.filter(v => v.type === 'train').length;
    const buses = VEHICLES.filter(v => v.type === 'bus').length;

    document.getElementById('kpiGrid').innerHTML = `
        <div class="kpi"><div class="kpi-head"><span class="kpi-icon">🚦</span><span class="kpi-label">Total Vehicles</span></div><div class="kpi-value">${total}</div><div class="kpi-sub">Across Nashik</div></div>
        <div class="kpi green"><div class="kpi-head"><span class="kpi-icon">🟢</span><span class="kpi-label">Active Now</span></div><div class="kpi-value">${active}</div><div class="kpi-sub">Moving on roads</div></div>
        <div class="kpi red"><div class="kpi-head"><span class="kpi-icon">⚠️</span><span class="kpi-label">Delayed</span></div><div class="kpi-value">${delayed}</div><div class="kpi-sub">Behind schedule</div></div>
        <div class="kpi orange"><div class="kpi-head"><span class="kpi-icon">🚑</span><span class="kpi-label">Emergency</span></div><div class="kpi-value">${emergency}</div><div class="kpi-sub">Ambulances active</div></div>
        <div class="kpi blue"><div class="kpi-head"><span class="kpi-icon">🚆</span><span class="kpi-label">Trains</span></div><div class="kpi-value">${trains}</div><div class="kpi-sub">At Nashik Road</div></div>
        <div class="kpi purple"><div class="kpi-head"><span class="kpi-icon">🚌</span><span class="kpi-label">CityLink Buses</span></div><div class="kpi-value">${buses}</div><div class="kpi-sub">Active routes</div></div>
    `;
}

// ============================================================
// MAPS
// ============================================================
function renderDashboardMap() {
    if (dashMap) { dashMap.remove(); dashMap = null; }
    dashMap = L.map('dashMap', {
        zoomControl: true,
        scrollWheelZoom: true,
        wheelPxPerZoomLevel: 120,
        maxZoom: 17,
        minZoom: 10
    }).setView([19.9975, 73.7898], 12);
    
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', { attribution: '© Esri', maxZoom: 19 }).addTo(dashMap);
    
    L.tileLayer('https://api.tomtom.com/traffic/map/4/tile/flow/relative0/{z}/{x}/{y}.png?key=hLCI7TTG53qNSP0dpP7ityLiHY2KmAih', {
        opacity: 0.6,
        attribution: '© TomTom Traffic'
    }).addTo(dashMap);
    
    drawMarkers(dashMap, dashMarkers, VEHICLES);
}

function renderFullMap() {
    if (fullMap) {
        drawMarkers(fullMap, fullMarkers, VEHICLES);
        return;
    }
    fullMap = L.map('fullMap', {
        zoomControl: true,
        scrollWheelZoom: true,
        wheelPxPerZoomLevel: 120,
        maxZoom: 17,
        minZoom: 10
    }).setView([19.9975, 73.7898], 12);
    
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', { attribution: '© Esri', maxZoom: 19 }).addTo(fullMap);
    
    L.tileLayer('https://api.tomtom.com/traffic/map/4/tile/flow/relative0/{z}/{x}/{y}.png?key=hLCI7TTG53qNSP0dpP7ityLiHY2KmAih', {
        opacity: 0.6,
        attribution: '© TomTom Traffic'
    }).addTo(fullMap);
    
    drawMarkers(fullMap, fullMarkers, VEHICLES);
}

function drawMarkers(map, arr, vehicles) {
    if (!map) return;
    arr.forEach(m => map.removeLayer(m));
    arr.length = 0;
    vehicles.forEach(v => {
        const icon = L.divIcon({
            html: `<div style="font-size:20px;text-shadow:0 1px 3px rgba(0,0,0,0.5);">${v.icon}</div>`,
            className: '', iconSize: [24, 24], iconAnchor: [12, 12]
        });
        const marker = L.marker([v.lat, v.lon], { icon })
            .addTo(map)
            .bindPopup(`<b>${v.id}</b><br>${v.route}<br>Speed: ${v.speed} km/h<br>Status: ${v.status}`);
        arr.push(marker);
    });
}

// ============================================================
// DASHBOARD UPDATES
// ============================================================
function renderDashboardUpdates() {
    const c = document.getElementById('dashUpdates');
    if (!c) return;
    const recent = alertLog.slice(-6).reverse();
    c.innerHTML = recent.map(a => `<div class="update-item"><span>${a.text}</span><span class="time">${a.time}</span></div>`).join('');
}

// ============================================================
// VEHICLES PAGE
// ============================================================
function renderVehiclesPage() {
    const tabs = document.getElementById('vehicleTabs');
    if (tabs && !tabs.dataset.built) {
        tabs.dataset.built = '1';
        const types = [
            { id: 'all', label: 'All' }, { id: 'train', label: '🚆 Trains' },
            { id: 'bus', label: '🚌 Buses' }, { id: 'cab', label: '🚗 Cabs' },
            { id: 'rickshaw', label: '🛺 Autos' }, { id: 'ambulance', label: '🚑 Ambulances' },
            { id: 'truck', label: '🚛 Trucks' },
        ];
        tabs.innerHTML = types.map(t => `<button class="tab ${t.id === currentVehicleFilter ? 'active' : ''}" onclick="filterVehicles('${t.id}', this)">${t.label}</button>`).join('');
    }

    const tbody = document.getElementById('vehiclesTableBody');
    const list = currentVehicleFilter === 'all' ? VEHICLES : VEHICLES.filter(v => v.type === currentVehicleFilter);
    tbody.innerHTML = list.map(v => `
        <tr onclick="openModal('${escapeId(v.id)}')">
            <td><strong>${v.id}</strong></td>
            <td>${v.icon} ${v.type}</td>
            <td>${v.route}</td>
            <td>${v.driver}</td>
            <td>${v.speed} km/h</td>
            <td><span class="status-tag ${v.status}">${statusLabel(v.status)}</span></td>
            <td>${v.eta}</td>
        </tr>
    `).join('');
}

function filterVehicles(type, el) {
    currentVehicleFilter = type;
    document.querySelectorAll('#vehicleTabs .tab').forEach(t => t.classList.remove('active'));
    if (el) el.classList.add('active');
    renderVehiclesPage();
}

function statusLabel(s) {
    return { active: 'Active', delayed: 'Delayed', idle: 'Idle', emergency: 'Emergency', booked: 'Booked' }[s] || s;
}

function escapeId(id) { return id.replace(/'/g, "\\'"); }

// ============================================================
// ROUTES PAGE
// ============================================================
function renderRoutesPage() {
    const tabs = document.getElementById('routeTabs');
    if (tabs && !tabs.dataset.built) {
        tabs.dataset.built = '1';
        const types = [
            { id: 'all', label: 'All' }, { id: 'train', label: '🚆 Train Routes' },
            { id: 'bus', label: '🚌 Bus Routes' }, { id: 'cab', label: '🚗 Cab Routes' },
            { id: 'rickshaw', label: '🛺 Auto Routes' }, { id: 'ambulance', label: '🚑 Emergency' },
            { id: 'truck', label: '🚛 Logistics' },
        ];
        tabs.innerHTML = types.map(t => `<button class="tab ${t.id === currentRouteFilter ? 'active' : ''}" onclick="filterRoutes('${t.id}', this)">${t.label}</button>`).join('');
    }

    const grid = document.getElementById('routesGrid');
    const list = currentRouteFilter === 'all' ? VEHICLES : VEHICLES.filter(v => v.type === currentRouteFilter);

    const grouped = {};
    list.forEach(v => { if (!grouped[v.route]) grouped[v.route] = []; grouped[v.route].push(v); });

    grid.innerHTML = Object.entries(grouped).map(([route, vs]) => {
        const avgSpeed = Math.round(vs.reduce((s, v) => s + v.speed, 0) / vs.length);
        return `
            <div class="route-card">
                <h4>${vs[0].icon} ${route}</h4>
                <div class="route-meta">
                    <span>${vs.length} vehicle${vs.length > 1 ? 's' : ''}</span>
                    <span>Avg ${avgSpeed} km/h</span>
                    <span>${vs[0].type}</span>
                </div>
                ${vs.slice(0, 3).map(v => `<div style="font-size:12px;color:var(--text-light);margin-top:4px;">${v.id} · ${v.status} · ${v.speed} km/h</div>`).join('')}
            </div>
        `;
    }).join('');
}

function filterRoutes(type, el) {
    currentRouteFilter = type;
    document.querySelectorAll('#routeTabs .tab').forEach(t => t.classList.remove('active'));
    if (el) el.classList.add('active');
    renderRoutesPage();
}

// ============================================================
// DELAYS PAGE
// ============================================================
function renderDelaysPage() {
    const c = document.getElementById('delaysList');
    const delayed = VEHICLES.filter(v => v.status === 'delayed');
    if (!delayed.length) {
        c.innerHTML = '<p class="muted" style="padding:20px;text-align:center;">No delayed vehicles right now. Everything is on time.</p>';
        return;
    }
    c.innerHTML = delayed.map(v => `
        <div class="delay-row" onclick="openModal('${escapeId(v.id)}')" style="cursor:pointer;">
            <div class="delay-info">
                <strong>${v.icon} ${v.id}</strong>
                <span>${v.route} · Driver: ${v.driver}</span>
            </div>
            <div class="delay-time">${v.eta}</div>
        </div>
    `).join('');
}

// ============================================================
// ALERTS
// ============================================================
function generateAlerts() {
    const delayed = VEHICLES.filter(v => v.status === 'delayed');
    alertLog = [
        { title: 'Delay Alert', text: `${delayed[0]?.id || 'CityLink 103'} is running behind schedule.`, severity: 'critical', time: '2 min ago', read: false },
        { title: 'Emergency Active', text: 'Nashik 108 Ambulance 1 dispatched to Panchavati.', severity: 'critical', time: '5 min ago', read: false },
        { title: 'Train Delayed', text: 'Rajya Rani Express is delayed by 8 minutes at Nashik Road.', severity: 'warning', time: '8 min ago', read: false },
        { title: 'Cab Available', text: 'Ola Sedan 302 is now available near CBS.', severity: 'info', time: '12 min ago', read: false },
        { title: 'Auto Idle', text: 'Nashik Auto 505 is idle at Panchavati for 10 minutes.', severity: 'warning', time: '15 min ago', read: false },
    ];
    updateBadges();
}

function renderAlertsPage() {
    const c = document.getElementById('alertsPageList');
    if (!c) return;
    const filtered = currentAlertFilter === 'all' ? alertLog : alertLog.filter(a => a.severity === currentAlertFilter);
    const sorted = [...filtered].reverse();

    if (!sorted.length) {
        c.innerHTML = '<p class="muted" style="padding:20px;text-align:center;">No alerts in this category.</p>';
        return;
    }

    c.innerHTML = sorted.map((a) => {
        const idx = alertLog.indexOf(a);
        return `
            <div class="alert-card ${a.severity} ${a.read ? 'read' : ''}">
                <div class="info">
                    <strong>${a.title}<span class="severity ${a.severity}">${a.severity.toUpperCase()}</span></strong>
                    <p>${a.text}</p>
                    <div class="meta">Nashik · ${a.time}${a.read ? ' · Read' : ''}</div>
                </div>
                <div class="alert-actions">
                    <button class="btn-primary" onclick="markRead(${idx})"><i class="fas fa-check"></i> Mark as Read</button>
                    <button class="btn-danger" onclick="deleteAlert(${idx})"><i class="fas fa-trash"></i> Delete</button>
                </div>
            </div>
        `;
    }).join('');
}

function markRead(idx) {
    alertLog[idx].read = true;
    updateBadges();
    renderAlertsPage();
    renderDashboardUpdates();
}

function deleteAlert(idx) {
    alertLog.splice(idx, 1);
    updateBadges();
    renderAlertsPage();
    renderDashboardUpdates();
}

function markAllRead() {
    alertLog = alertLog.map(a => ({ ...a, read: true }));
    updateBadges();
    renderAlertsPage();
    renderDashboardUpdates();
}

function filterAlerts(type, el) {
    currentAlertFilter = type;
    document.querySelectorAll('.alert-filters .chip').forEach(c => c.classList.remove('active'));
    if (el) el.classList.add('active');
    renderAlertsPage();
}

function goToAlerts() {
    const btn = document.querySelector('[data-page="alerts"]');
    switchPage('alerts', btn);
}

// ============================================================
// ANALYTICS
// ============================================================
function renderAnalytics() {
    const statusCounts = ['active', 'delayed', 'idle', 'emergency', 'booked'].map(s => VEHICLES.filter(v => v.status === s).length);
    const typeCounts = ['train', 'bus', 'cab', 'rickshaw', 'ambulance', 'truck'].map(t => VEHICLES.filter(v => v.type === t).length);
    const speedRanges = [
        VEHICLES.filter(v => v.speed < 20).length,
        VEHICLES.filter(v => v.speed >= 20 && v.speed < 40).length,
        VEHICLES.filter(v => v.speed >= 40 && v.speed < 60).length,
        VEHICLES.filter(v => v.speed >= 60).length,
    ];

    if (chartStatus) chartStatus.destroy();
    if (chartType) chartType.destroy();
    if (chartSpeed) chartSpeed.destroy();
    if (chartPerf) chartPerf.destroy();

    chartStatus = new Chart(document.getElementById('chartStatus'), {
        type: 'doughnut',
        data: { labels: ['Active', 'Delayed', 'Idle', 'Emergency', 'Booked'], datasets: [{ data: statusCounts, backgroundColor: ['#4CAF50', '#D32F2F', '#F57C00', '#D32F2F', '#1976D2'] }] },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom' } } }
    });

    chartType = new Chart(document.getElementById('chartType'), {
        type: 'bar',
        data: { labels: ['Trains', 'Buses', 'Cabs', 'Autos', 'Ambulances', 'Trucks'], datasets: [{ data: typeCounts, backgroundColor: '#6B1D2B' }] },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }
    });

    chartSpeed = new Chart(document.getElementById('chartSpeed'), {
        type: 'bar',
        data: { labels: ['<20 km/h', '20-40', '40-60', '60+'], datasets: [{ data: speedRanges, backgroundColor: '#C9A84C' }] },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }
    });

    const active = VEHICLES.filter(v => v.status === 'active').length;
    const onTime = Math.round((active / VEHICLES.length) * 100);
    chartPerf = new Chart(document.getElementById('chartPerf'), {
        type: 'bar',
        data: {
            labels: ['On-Time %', 'Delayed', 'Emergency', 'Idle'],
            datasets: [{ data: [onTime, VEHICLES.filter(v => v.status === 'delayed').length, VEHICLES.filter(v => v.status === 'emergency').length, VEHICLES.filter(v => v.status === 'idle').length], backgroundColor: ['#4CAF50', '#D32F2F', '#D32F2F', '#F57C00'] }]
        },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }
    });
}

// ============================================================
// MODAL
// ============================================================
function openModal(vehicleId) {
    const v = VEHICLES.find(x => x.id === vehicleId);
    if (!v) return;

       let html = `
        <h2>${v.icon} ${v.id}</h2>
        <p class="subtitle">${v.route} · ${v.type.toUpperCase()}</p>

        <div class="detail-row"><span class="label">Vehicle Number</span><span class="value">${v.number || 'N/A'}</span></div>
        <div class="detail-row"><span class="label">Driver</span><span class="value">${v.driver}</span></div>
        ${v.rating ? `<div class="detail-row"><span class="label">⭐ Rating</span><span class="value">${v.rating} / 5</span></div>` : ''}
        ${v.experience ? `<div class="detail-row"><span class="label">📅 Experience</span><span class="value">${v.experience} years</span></div>` : ''}
        ${v.trips ? `<div class="detail-row"><span class="label">🚗 Total Trips</span><span class="value">${v.trips}</span></div>` : ''}
        ${v.rating ? `<div class="detail-row"><span class="label">✅ Verified</span><span class="value">Yes</span></div>` : ''}
        ${v.cabType ? `<div class="detail-row"><span class="label">Cab Type</span><span class="value">${v.cabType}</span></div>` : ''}
        <div class="detail-row"><span class="label">Current Speed</span><span class="value">${v.speed} km/h</span></div>
        <div class="detail-row"><span class="label">Status</span><span class="value">${statusLabel(v.status)}</span></div>
        <div class="detail-row"><span class="label">ETA</span><span class="value">${v.eta}</span></div>
        <div class="detail-row"><span class="label">Capacity</span><span class="value">${v.capacity || 'N/A'}</span></div>
        ${v.currentlyAt ? `<div class="detail-row"><span class="label">Currently At</span><span class="value">${v.currentlyAt}</span></div>` : ''}
        ${v.nextStop ? `<div class="detail-row"><span class="label">Next Stop</span><span class="value">${v.nextStop}</span></div>` : ''}
    `;

    if (v.journey && v.journey.stops && v.journey.stops.length) {
        html += `<div class="journey-title">Full Journey — ${v.journey.stops[0].station} → ${v.journey.stops[v.journey.stops.length - 1].station}</div>`;
        html += `<table class="journey-table"><thead><tr><th>Station</th><th>Arrival</th><th>Departure</th></tr></thead><tbody>`;
        v.journey.stops.forEach((s, i) => {
            const isCurrent = v.type === 'train' && s.station === v.currentlyAt;
            html += `<tr class="${isCurrent ? 'current' : ''}"><td>${s.station}</td><td>${s.arrival || '—'}</td><td>${s.departure || '—'}</td></tr>`;
        });
        html += `</tbody></table>`;
    }

    document.getElementById('modalContent').innerHTML = html;
    document.getElementById('modalOverlay').classList.add('show');
}

function closeModal() {
    document.getElementById('modalOverlay').classList.remove('show');
}

document.addEventListener('click', (e) => {
    if (e.target.id === 'modalOverlay') closeModal();
});

// ============================================================
// SEARCH
// ============================================================
function attachSearch() {
    const input = document.getElementById('globalSearch');
    if (!input) return;
    input.addEventListener('input', (e) => {
        const q = e.target.value.toLowerCase().trim();
        if (q.length < 3) return;
        const found = VEHICLES.find(v =>
            v.id.toLowerCase().includes(q) ||
            v.route.toLowerCase().includes(q) ||
            v.type.toLowerCase().includes(q)
        );
        if (found) {
            openModal(found.id);
            input.value = '';
        }
    });
}

// ============================================================
// THEME
// ============================================================
function toggleTheme() {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    const icon = document.getElementById('themeIcon');
    if (icon) icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
    const toggle = document.getElementById('darkModeToggle');
    if (toggle) toggle.checked = isDark;
}

// ============================================================
// SIMULATION
// ============================================================
function startSimulation() {
    if (simulationTimer) clearInterval(simulationTimer);
    simulationTimer = setInterval(simulateTick, refreshSeconds * 1000);
}

function simulateTick() {
    const refresh = document.getElementById('refreshToggle');
    if (refresh && !refresh.checked) return;

    VEHICLES.forEach(v => {
        // Trains stay at Nashik Road Station
        if (v.type === 'train') {
            v.lat = AREAS.nashikRoad.lat + (Math.random() - 0.5) * 0.006;
            v.lon = AREAS.nashikRoad.lon + (Math.random() - 0.5) * 0.006;
            v.speed = Math.max(0, Math.min(80, v.speed + (Math.random() - 0.5) * 3));
            v.speed = Math.round(v.speed);
            return;
        }

        // Other vehicles move slightly
        v.lat += (Math.random() - 0.5) * 0.001;
        v.lon += (Math.random() - 0.5) * 0.001;
        v.speed = Math.max(5, Math.min(70, v.speed + (Math.random() - 0.5) * 4));
        v.speed = Math.round(v.speed);

        // Occasionally toggle status
        if (Math.random() > 0.96 && v.type !== 'train') {
            const opts = ['active', 'active', 'active'];
            if (v.type === 'ambulance') opts.push('emergency');
            if (v.type === 'cab') opts.push('booked');
            opts.push('idle');
            v.status = opts[Math.floor(Math.random() * opts.length)];
        }
    });

    const dashPage = document.getElementById('page-dashboard');
    const mapPage = document.getElementById('page-map');
    const vehPage = document.getElementById('page-vehicles');
    const delaysPage = document.getElementById('page-delays');

    if (dashPage.classList.contains('active')) {
        drawMarkers(dashMap, dashMarkers, VEHICLES);
        renderKPIs();
        renderDashboardUpdates();
    }
    if (mapPage.classList.contains('active') && fullMap) drawMarkers(fullMap, fullMarkers, VEHICLES);
    if (vehPage.classList.contains('active')) renderVehiclesPage();
    if (delaysPage.classList.contains('active')) renderDelaysPage();

    updateBadges();
}

// Update refresh interval when changed
document.addEventListener('change', (e) => {
    if (e.target.id === 'refreshInterval') {
        refreshSeconds = parseInt(e.target.value);
        startSimulation();
    }
});

// ============================================================
// BOOT
// ============================================================
window.addEventListener('load', () => {
    console.log('CityTrack ready. Total vehicles:', VEHICLES.length);
});

// ============================================================
// FIREBASE SIGN OUT
// ============================================================
function handleSignOut() {
    const { signOut } = window.firebaseFns;
    signOut(window.firebaseAuth)
        .then(() => {
            document.getElementById('dashboardMain').style.display = 'none';
            document.getElementById('loginPage').style.display = 'flex';
            document.getElementById('loginEmail').value = '';
            document.getElementById('loginPassword').value = '';
        })
        .catch((error) => {
            alert('Sign out failed: ' + error.message);
        });
}
// ============================================================
// FIREBASE ALERTS — SAVE AND LOAD
// ============================================================

async function loadAlertsFromFirebase() {
    if (!window.firebaseDB) return;
    const { collection, getDocs, query, orderBy } = window.firebaseFns;
    const db = window.firebaseDB;

    try {
        const q = query(collection(db, 'alerts'), orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(q);
        const firebaseAlerts = [];
        
             querySnapshot.forEach((docSnap) => {
            const data = docSnap.data();
            firebaseAlerts.push({
                title: data.title,
                text: data.text,
                severity: data.severity,
                meta: data.meta,
                time: data.time,
                read: data.read || false,
                saved: true,
                firestoreId: docSnap.id
            });
        });

        firebaseAlerts.forEach(fa => {
            if (!alertLog.some(a => a.title === fa.title && a.text === fa.text)) {
                alertLog.push(fa);
            }
        });

        updateBadges();
        if (document.getElementById('page-alerts').classList.contains('active')) {
            renderAlertsPage();
        }
        if (document.getElementById('page-dashboard').classList.contains('active')) {
            renderDashboardUpdates();
        }
    } catch (e) {
        console.error('Error loading alerts:', e);
    }
}
// ============================================================
// FIRESTORE DELETE / UPDATE ALERTS
// ============================================================
let firebaseAlertIds = []; // Store Firestore document IDs

async function deleteAlertFromFirebase(firestoreId) {
    if (!window.firebaseDB || !firestoreId) return;
    const { doc, deleteDoc } = window.firebaseFns;
    const db = window.firebaseDB;

    try {
        await deleteDoc(doc(db, 'alerts', firestoreId));
        console.log('Alert deleted from Firestore:', firestoreId);
    } catch (e) {
        console.error('Error deleting alert:', e);
    }
}

async function markAlertReadInFirebase(firestoreId) {
    if (!window.firebaseDB || !firestoreId) return;
    const { doc, updateDoc } = window.firebaseFns;
    const db = window.firebaseDB;

    try {
        await updateDoc(doc(db, 'alerts', firestoreId), {
            read: true
        });
        console.log('Alert marked as read:', firestoreId);
    } catch (e) {
        console.error('Error updating alert:', e);
    }
}

// Override deleteAlert to also remove from Firestore
const originalDeleteAlert = window.deleteAlert;
window.deleteAlert = function(index) {
    const alert = alertLog[index];
    if (alert && alert.firestoreId) {
        deleteAlertFromFirebase(alert.firestoreId);
    }
    if (originalDeleteAlert) {
        originalDeleteAlert(index);
    }
};

// Override markAllRead to also update Firestore
const originalMarkAllRead = window.markAllRead;
window.markAllRead = function() {
    alertLog.forEach(a => {
        if (!a.read && a.firestoreId) {
            markAlertReadInFirebase(a.firestoreId);
        }
    });
    if (originalMarkAllRead) {
        originalMarkAllRead();
    }
};
// ============================================================
// FIREBASE ALERTS — SAVE TO FIRESTORE
// ============================================================
async function saveAlertsToFirebase() {
    if (!window.firebaseDB) return;
    const { collection, addDoc, getDocs, serverTimestamp } = window.firebaseFns;
    const db = window.firebaseDB;

    try {
        const existingSnap = await getDocs(collection(db, 'alerts'));
        const existingTitles = new Set();
        existingSnap.forEach(docSnap => {
            const data = docSnap.data();
            existingTitles.add(data.title + '|' + data.text);
        });

        for (const alert of alertLog) {
            const key = alert.title + '|' + alert.text;
            if (!existingTitles.has(key)) {
                const docRef = await addDoc(collection(db, 'alerts'), {
                    title: alert.title,
                    text: alert.text,
                    severity: alert.severity,
                    meta: alert.meta || 'Nashik',
                    time: alert.time,
                    read: false,
                    createdAt: serverTimestamp()
                });
                alert.saved = true;
                alert.firestoreId = docRef.id;
                existingTitles.add(key);
            }
        }
        console.log('Alerts sync complete');
    } catch (e) {
        console.error('Error saving alerts:', e);
    }
}

// ============================================================
// LIVE WEATHER (OpenWeatherMap)
// ============================================================
const WEATHER_API_KEY = 'd2fa5649745d6792970928cc3282e6fc';
const WEATHER_CITY = 'Nashik';
const WEATHER_COUNTRY = 'IN';

async function loadWeather() {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${WEATHER_CITY},${WEATHER_COUNTRY}&appid=${WEATHER_API_KEY}&units=metric`;
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error('Weather API error: ' + response.status);
        }

        const data = await response.json();

        const temp = Math.round(data.main.temp);
        const description = data.weather[0].description;
        const iconCode = data.weather[0].icon;

        const emoji = getWeatherEmoji(iconCode);

        document.getElementById('weatherTemp').textContent = `${temp}°C`;
        document.getElementById('weatherDesc').textContent = description;
        document.getElementById('weatherIcon').textContent = emoji;

        console.log('Weather loaded:', temp + '°C, ' + description);
    } catch (error) {
        console.error('Weather error:', error);
        document.getElementById('weatherTemp').textContent = '--°C';
        document.getElementById('weatherDesc').textContent = 'Unavailable';
    }
}

function getWeatherEmoji(iconCode) {
    const map = {
        '01d': '☀️', '01n': '🌙',
        '02d': '⛅', '02n': '☁️',
        '03d': '☁️', '03n': '☁️',
        '04d': '☁️', '04n': '☁️',
        '09d': '🌧️', '09n': '🌧️',
        '10d': '🌦️', '10n': '🌧️',
        '11d': '⛈️', '11n': '⛈️',
        '13d': '❄️', '13n': '❄️',
        '50d': '🌫️', '50n': '🌫️',
    };
    return map[iconCode] || '🌤️';
}

setInterval(loadWeather, 600000);

window.addEventListener('load', () => {
    setTimeout(loadWeather, 1000);
});
