// import marvella from "../assets/paneer.png"
// import platinum from "../assets/power.png"
// import diamond from "../assets/rich.png"
// import mushroom from "../assets/mushroom.png"
// import corn from "../assets/corn.png"
// import mexican from "../assets/mexican.png"
// import weekly from "../assets/weekly.jpg"
// import monthly from "../assets/monthly.jpg"


export type product = {
    id: number,
    img: any,
    title: string,
    speciality: string,
    price: number,
    finalPrice: number
    details: string
}

export const allProducts: product[] = [
    {
        id: 1,
        img: "https://ik.imagekit.io/vaibhav11/Black%20Olive/paneer.png?updatedAt=1735428955087",
        title: "PANNER MARVELLA",
        speciality: "BLACK OLIVE",
        price: 189,
        finalPrice: 149,
        details: "Exotic vegetable and cottage cheese with cheese dressings garnished with black olives"
    },
    {
        id: 2,
        img: "https://ik.imagekit.io/vaibhav11/Black%20Olive/power.png?updatedAt=1735428954667",
        title: "POWER PLATINUM",
        speciality: "BLACK OLIVE",
        price: 159,
        finalPrice: 99,
        details: "Steam chickpeas with veggies, mix with pomegranate and cater with indian style red sauce dressing and garnish with coriander"
    },
    {
        id: 3,
        img: "https://ik.imagekit.io/vaibhav11/Black%20Olive/rich.png?updatedAt=1735428949065",
        title: "RICH DIAMOND",
        speciality: "BLACK OLIVE",
        price: 139,
        finalPrice: 99,
        details: "Sprouted green grams and brown chickpeas cater with indian style red sauce dressing, garnished with sunflower seeds"
    },
    {
        id: 4,
        img: "https://ik.imagekit.io/vaibhav11/Black%20Olive/mushroom.png?updatedAt=1735428954699",
        title: "MYSTIC MUSHROOM",
        speciality: "BLACK OLIVE",
        price: 189,
        finalPrice: 149,
        details: "Exotic vegetable with mushroom infused in oregano garnished with black olive served with cheese dressing"
    },
    {
        id: 5,
        img: "https://ik.imagekit.io/vaibhav11/Black%20Olive/corn.png?updatedAt=1735428928947",
        title: "GOLDEN CORN",
        speciality: "BLACK OLIVE",
        price: 99,
        finalPrice: 69,
        details: "American sweet corn with sprinkled freshly ground black pepper and a squeeze of zesty lemon"
    },
    {
        id: 6,
        img: "https://ik.imagekit.io/vaibhav11/Black%20Olive/mexican.png?updatedAt=1735428942589",
        title: "MEXICAN MAGIC",
        speciality: "BLACK OLIVE",
        price: 159,
        finalPrice: 119,
        details: "Iceberg lettuce and other veggies cater with mexican style dressing, garnished with black olive served with nachos"
    },
    {
        id: 7,
        img: "https://ik.imagekit.io/vaibhav11/Black%20Olive/weekly.jpg?updatedAt=1735428889502",
        title: "WEEKLY MEMBERSHIP!",
        speciality: "BLACK OLIVE",
        price: 694,
        finalPrice: 629,
        details: "Weekly membership offers 6 fresh salads with 2 bonus days at discounted price .stay healthy every week!"
    },
    {
        id: 8,
        img: "https://ik.imagekit.io/vaibhav11/Black%20Olive/monthly.jpg?updatedAt=1735428889483",
        title: "MONTHLY MEMBERSHIP!",
        speciality: "BLACK OLIVE",
        price: 2776,
        finalPrice: 2449,
        details: "Monthly membership includes 24 fresh salads, with six bonus days at discounted price.perfect for a healthy lifestyle! "
    }
]

export const salads: product[] = [
    {
        id: 1,
        img: "https://ik.imagekit.io/vaibhav11/Black%20Olive/paneer.png?updatedAt=1735428955087",
        title: "PANNER MARVELLA",
        speciality: "BLACK OLIVE",
        price: 189,
        finalPrice: 149,
        details: "Exotic vegetable and cottage cheese with cheese dressings garnished with black olives"
    },
    {
        id: 2,
        img: "https://ik.imagekit.io/vaibhav11/Black%20Olive/power.png?updatedAt=1735428954667",
        title: "POWER PLATINUM",
        speciality: "BLACK OLIVE",
        price: 159,
        finalPrice: 99,
        details: "Steam chickpeas with veggies, mix with pomegranate and cater with indian style red sauce dressing and garnish with coriander"
    },
    {
        id: 3,
        img: "https://ik.imagekit.io/vaibhav11/Black%20Olive/rich.png?updatedAt=1735428949065",
        title: "RICH DIAMOND",
        speciality: "BLACK OLIVE",
        price: 139,
        finalPrice: 99,
        details: "Sprouted green grams and brown chickpeas cater with indian style red sauce dressing, garnished with sunflower seeds"
    },
    {
        id: 4,
        img: "https://ik.imagekit.io/vaibhav11/Black%20Olive/mushroom.png?updatedAt=1735428954699",
        title: "MYSTIC MUSHROOM",
        speciality: "BLACK OLIVE",
        price: 189,
        finalPrice: 149,
        details: "Exotic vegetable with mushroom infused in oregano garnished with black olive served with cheese dressing"
    },
    {
        id: 5,
        img: "https://ik.imagekit.io/vaibhav11/Black%20Olive/corn.png?updatedAt=1735428928947",
        title: "GOLDEN CORN",
        speciality: "BLACK OLIVE",
        price: 99,
        finalPrice: 69,
        details: "American sweet corn with sprinkled freshly ground black pepper and a squeeze of zesty lemon"
    },
    {
        id: 6,
        img: "https://ik.imagekit.io/vaibhav11/Black%20Olive/mexican.png?updatedAt=1735428942589",
        title: "MEXICAN MAGIC",
        speciality: "BLACK OLIVE",
        price: 159,
        finalPrice: 119,
        details: "Iceberg lettuce and other veggies cater with mexican style dressing, garnished with black olive served with nachos"
    }
]

export const membership: product[] = [
    {
        id: 7,
        img: "https://ik.imagekit.io/vaibhav11/Black%20Olive/weekly.jpg?updatedAt=1735428889502",
        title: "WEEKLY MEMBERSHIP!",
        speciality: "BLACK OLIVE",
        price: 694,
        finalPrice: 629,
        details: "Weekly membership offers 6 fresh salads with 2 bonus days at discounted price .stay healthy every week!"
    },
    {
        id: 8,
        img: "https://ik.imagekit.io/vaibhav11/Black%20Olive/monthly.jpg?updatedAt=1735428889483",
        title: "MONTHLY MEMBERSHIP!",
        speciality: "BLACK OLIVE",
        price: 2776,
        finalPrice: 2449,
        details: "Monthly membership includes 24 fresh salads, with six bonus days at discounted price.perfect for a healthy lifestyle! "
    }
]

export const allProductsIK: product[] = [
    {
        id: 1,
        img: "https://ik.imagekit.io/vaibhav11/Black%20Olive/paneer.png?updatedAt=1735428955087",
        title: "PANNER MARVELLA",
        speciality: "BLACK OLIVE",
        price: 189,
        finalPrice: 149,
        details: "Exotic vegetable and cottage cheese with cheese dressings garnished with black olives"
    },
    {
        id: 2,
        img: "https://ik.imagekit.io/vaibhav11/Black%20Olive/power.png?updatedAt=1735428954667",
        title: "POWER PLATINUM",
        speciality: "BLACK OLIVE",
        price: 159,
        finalPrice: 99,
        details: "Steam chickpeas with veggies, mix with pomegranate and cater with indian style red sauce dressing and garnish with coriander"
    },
    {
        id: 3,
        img: "https://ik.imagekit.io/vaibhav11/Black%20Olive/rich.png?updatedAt=1735428949065",
        title: "RICH DIAMOND",
        speciality: "BLACK OLIVE",
        price: 139,
        finalPrice: 99,
        details: "Sprouted green grams and brown chickpeas cater with indian style red sauce dressing, garnished with sunflower seeds"
    },
    {
        id: 4,
        img: "https://ik.imagekit.io/vaibhav11/Black%20Olive/mushroom.png?updatedAt=1735428954699",
        title: "MYSTIC MUSHROOM",
        speciality: "BLACK OLIVE",
        price: 189,
        finalPrice: 149,
        details: "Exotic vegetable with mushroom infused in oregano garnished with black olive served with cheese dressing"
    },
    {
        id: 5,
        img: "https://ik.imagekit.io/vaibhav11/Black%20Olive/corn.png?updatedAt=1735428928947",
        title: "GOLDEN CORN",
        speciality: "BLACK OLIVE",
        price: 99,
        finalPrice: 69,
        details: "American sweet corn with sprinkled freshly ground black pepper and a squeeze of zesty lemon"
    },
    {
        id: 6,
        img: "https://ik.imagekit.io/vaibhav11/Black%20Olive/mexican.png?updatedAt=1735428942589",
        title: "MEXICAN MAGIC",
        speciality: "BLACK OLIVE",
        price: 159,
        finalPrice: 119,
        details: "Iceberg lettuce and other veggies cater with mexican style dressing, garnished with black olive served with nachos"
    },
    {
        id: 7,
        img: "https://ik.imagekit.io/vaibhav11/Black%20Olive/weekly.jpg?updatedAt=1735428889502",
        title: "WEEKLY MEMBERSHIP!",
        speciality: "BLACK OLIVE",
        price: 694,
        finalPrice: 629,
        details: "Weekly membership offers 6 fresh salads with 2 bonus days at discounted price .stay healthy every week!"
    },
    {
        id: 8,
        img: "https://ik.imagekit.io/vaibhav11/Black%20Olive/monthly.jpg?updatedAt=1735428889483",
        title: "MONTHLY MEMBERSHIP!",
        speciality: "BLACK OLIVE",
        price: 2776,
        finalPrice: 2449,
        details: "Monthly membership includes 24 fresh salads, with six bonus days at discounted price.perfect for a healthy lifestyle! "
    }
]

export const saladsIK: product[] = [
    {
        id: 1,
        img: "https://ik.imagekit.io/vaibhav11/Black%20Olive/paneer.png?updatedAt=1735428955087",
        title: "PANNER MARVELLA",
        speciality: "BLACK OLIVE",
        price: 189,
        finalPrice: 149,
        details: "Exotic vegetable and cottage cheese with cheese dressings garnished with black olives"
    },
    {
        id: 2,
        img: "https://ik.imagekit.io/vaibhav11/Black%20Olive/power.png?updatedAt=1735428954667",
        title: "POWER PLATINUM",
        speciality: "BLACK OLIVE",
        price: 159,
        finalPrice: 99,
        details: "Steam chickpeas with veggies, mix with pomegranate and cater with indian style red sauce dressing and garnish with coriander"
    },
    {
        id: 3,
        img: "https://ik.imagekit.io/vaibhav11/Black%20Olive/rich.png?updatedAt=1735428949065",
        title: "RICH DIAMOND",
        speciality: "BLACK OLIVE",
        price: 139,
        finalPrice: 99,
        details: "Sprouted green grams and brown chickpeas cater with indian style red sauce dressing, garnished with sunflower seeds"
    },
    {
        id: 4,
        img: "https://ik.imagekit.io/vaibhav11/Black%20Olive/mushroom.png?updatedAt=1735428954699",
        title: "MYSTIC MUSHROOM",
        speciality: "BLACK OLIVE",
        price: 189,
        finalPrice: 149,
        details: "Exotic vegetable with mushroom infused in oregano garnished with black olive served with cheese dressing"
    },
    {
        id: 5,
        img: "https://ik.imagekit.io/vaibhav11/Black%20Olive/corn.png?updatedAt=1735428928947",
        title: "GOLDEN CORN",
        speciality: "BLACK OLIVE",
        price: 99,
        finalPrice: 69,
        details: "American sweet corn with sprinkled freshly ground black pepper and a squeeze of zesty lemon"
    },
    {
        id: 6,
        img: "https://ik.imagekit.io/vaibhav11/Black%20Olive/mexican.png?updatedAt=1735428942589",
        title: "MEXICAN MAGIC",
        speciality: "BLACK OLIVE",
        price: 159,
        finalPrice: 119,
        details: "Iceberg lettuce and other veggies cater with mexican style dressing, garnished with black olive served with nachos"
    }
]

export const membershipIk: product[] = [
    {
        id: 7,
        img: "https://ik.imagekit.io/vaibhav11/Black%20Olive/weekly.jpg?updatedAt=1735428889502",
        title: "WEEKLY MEMBERSHIP!",
        speciality: "BLACK OLIVE",
        price: 694,
        finalPrice: 629,
        details: "Weekly membership offers 6 fresh salads with 2 bonus days at discounted price .stay healthy every week!"
    },
    {
        id: 8,
        img: "https://ik.imagekit.io/vaibhav11/Black%20Olive/monthly.jpg?updatedAt=1735428889483",
        title: "MONTHLY MEMBERSHIP!",
        speciality: "BLACK OLIVE",
        price: 2776,
        finalPrice: 2449,
        details: "Monthly membership includes 24 fresh salads, with six bonus days at discounted price.perfect for a healthy lifestyle! "
    }
]