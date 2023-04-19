export const sections = {
    "i-pace": "i-pace",
    benefits: "benefits",
    range: "range",
    "cost-of-ownership": "cost-of-ownership",
    charging: "charging",
    "register-interest": "register-interest",
} as const;

export const stats = [
    {
        title: "range (up to)",
        value: "446",
        unit: "km±",
        description: `Drive up to 446km on a full charge*.<br/>
      <small>Real world figures may vary depending on your driving style.</small>`,
    },
    {
        title: "charging time",
        value: "12.75",
        unit: "hours*",
        description: `Perfect for charging at home overnight.<br/>
      <small>*Time based on using a 7kW AC home charger.</small>`,
    },
    {
        title: "emissions",
        value: "0",
        unit: "CO2",
        description: "Enjoy zero tailpipe emissions.",
    },
    {
        title: "acceleration",
        value: "4.8",
        unit: "seconds",
        description: "Capable of 0-100hm/h in 4.8 secs.",
    },
];

export const range = [
    {
        id: "HSE",
        src: "/images/HSE.png",
        title: "JAGUAR I-PACE R-DYNAMIC HSE",
        features: `\u2013 Matrix LED headlights with signature DRL<br/>
      \u2013 20" Style 5068, Diamond Turned with Gloss Dark Grey contrast wheels<br/>
      \u2013 Fixed panoramic roof<br/>
      \u2013 16-way heated and cooled electric driver memory front seats<br/>
      \u2013 MeridianTM Sound System`,
    },
    {
        id: "SE",
        src: "/images/SE.png",
        title: "JAGUAR I-PACE R-DYNAMIC SE",
        features: `\u2013 Premium LED headlights with signature DRL<br/>
      \u2013 20" Style 6007 Diamond Turned wheels<br/>
      \u2013 Premium cabin lighting<br/>
      \u2013 Lower Touchscreen<br/>
      \u2013 Wireless device charging`,
    },
];

export const benefits = [
    {
        id: "tick",
        src: "/images/tick.png",
        title: "easy and convenient",
        description:
            "Wit the majority of electric car charging done from home, you can more efficiently plan your time around the things you want to do. Simply recharge on an evening, and by the morning you\u2019ll be ready to go.",
    },
    {
        id: "co2",
        src: "/images/co2.png",
        title: "ZERO TAILPIPE EMISSIONS",
        description:
            "Vehicles powered solely by a battery are able to achieve maximum power with zero tailpipe emissions. And with more renewable resources added to the National Grid all the time, electric car energy gets cleaner every year.",
    },
    {
        id: "tick",
        src: "/images/drive.png",
        title: "A DISTINCTIVE DRIVE",
        description:
            "Electric technology is not only incredible quiet, it\u2019s also able to deliver instant acceleration with no lag and no gearshift interruptions. This means a distinctively smooth and responsive driving experience at all speeds.",
    },
];

export const features = [
    {
        id: "brake",
        src: "/images/feature-1.png",
        title: "Brake Regeneration",
        description:
            "Once you lift your foot off the accelerator, an intelligent regenerative braking system is activated. This comfortably slows the vehicle while converting the power generated to optimise the battery\u2019s range. Applying the brake pedal increases the amount of power harvested.",
    },
    {
        id: "drive",
        src: "/images/feature-2.png",
        title: "DRIVING STYLE",
        description:
            "One of the biggest impacts on range is the driver. Travelling at a steady pace – rather than frequent, heavy acceleration – will help an electric car preserve range. This can also reduce your reliance on hard braking which consumes more energy than gentler braking.",
    },
    {
        id: "pre",
        src: "/images/feature-3.png",
        title: "pre-conditioning",
        description:
            "Plugging your vehicle into a charged source will pre-condition the battery to its optimum temperature once charging has completed. This assists the vehicle in achieving maximum range and performance prior to your departure.",
    },
    {
        id: "eco",
        src: "/images/feature-4.png",
        title: "eco mode",
        description:
            "Eco Mode helps preserve the vehicle\u2019s range by making subtle changes to cabin temperature, air recirculation and to a number of the vehicle\u2019s other features. You can override these changes by normal operation of each feature or via the menu settings.",
    },
];

export const lowCost = [
    {
        id: "electricity",
        src: "/images/electricity.png",
        title: "ELECTRICITY IS CHEAPER PER KM",
        description:
            "The cost of electricity is lower per kilometre than petrol or diesel, making all-electric cars cheaper to run on a daily basis.",
    },
    {
        id: "lower-cost",
        src: "/images/lower-cost.png",
        title: "LOWER SERVICING COSTS",
        description:
            "As all-electric powertrains have fewer moving parts than a petrol or diesel engine, and regenerative braking capabilities are relatively gentler on brakes and tyres, servicing costs are lower.",
    },
];

export const charging = [
    {
        id: "1",
        src: "/images/charging-1.png",
        title: "AC CHARGING SPEEDS AT YOUR DESTINATION*",
        description:
            "Up to 35km of range from 60 minutes for all-electric Jaguar I-PACE. Jaguar all-electric cars come with an AC Public/Wall Box charging cable as standard.",
    },
    {
        id: "2",
        src: "/images/charging-2.png",
        title: "DC CHARGING SPEEDS ON MOTORWAYS AND PUBLIC ROADS*",
        description:
            "In all-electric Jaguar I-PACE, a 50kW rapid DC charging point will deliver up to 62km of range from 15 minutes. A 100kW rapid DC charging point will deliver up to 127km of range from 15 minutes.",
    },
    {
        id: "3",
        src: "/images/charging-3.png",
        title: "HOW TO FIND, ACCESS AND PAY FOR CHARGING",
        description:
            "Between your vehicle\u2019s navigation system1 and the latest apps from your local charging providers, it couldn\u2019t be simpler to find the thousands of public charging points across the country.",
    },
];

export const homeCharging = [
    {
        id: "1",
        src: "/images/save-1.png",
        title: "wake up ready to go",
        description:
            "A home charger will charge an all-electric car overnight and deliver up to 35km1 of range from 60 minutes using a 7kW supply.",
    },
    {
        id: "2",
        src: "/images/save-2.png",
        title: "save money every month",
        description:
            "Charging at home is not only convenient, the cost of electricity is less per kilometre compared to petrol and diesel. And you can reduce this further with an off-peak electricity tariff.",
    },
    {
        id: "3",
        src: "/images/save-3.png",
        title: "Quality assured",
        description:
            "Home chargers from industry-approved providers are designed to be used in all weather conditions.",
    },
];

export const installation = [
    {
        id: "1",
        src: "/images/step-1.png",
        title: "1. CHOOSE YOUR PROVIDER",
        description:
            "To start your home charger installation process, choose your home charging provider. Your Jaguar Retailer can help you get started.",
    },
    {
        id: "2",
        src: "/images/step-2.png",
        title: "2. SUITABILITY SURVEY",
        description:
            "To start your home charger installation process, choose your home charging provider. Your Jaguar Retailer can help you get started.",
    },
    {
        id: "3",
        src: "/images/step-3.png",
        title: "3. ARRANGE YOUR INSTALLATION",
        description:
            "Agree an installation date with your chosen provider that is before the delivery date of your vehicle. There are various Home Chargers for your vehicle, please enquire with your provider for which option is best suited for you.",
    },
    {
        id: "4",
        src: "/images/step-4.png",
        title: "4. INSTALLATION AND DEMO",
        description:
            "Once your installation date comes around, your chosen provider will install your wall box and talk you through the basics of charging.",
    },
];
