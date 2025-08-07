export interface SpaService {
  id: string;
  name: string;
  description: string;
  duration60: string;
  duration90: string;
  price60: number;
  price90: number;
}

export interface SpaTreatment {
  id: string;
  name: string;
  description: string;
  price?: number;
  duration?: string;
}

export interface SpaPackage {
  id: string;
  name: string;
  description: string;
  price: number;
}

export interface SpaCategory {
  id: string;
  title: string;
  subtitle: string;
  services?: SpaService[];
  treatments?: SpaTreatment[];
}

export const spaData = {
  hero: {
    title: "SPA & WELLNESS",
    subtitle: "WELLZEN SPA",
    tagline: "Luxury for the Mind, Body, and Soul",
    description: "WellZen Spa at Lalaguna Villas is the ultimate retreat to pamper your senses, with our range of revitalizing therapies to ease away stress and enhance your physical and mental wellbeing. We offer a range of luxury treatments, such as Reflexology, Warm Bamboo Massage, Aroma Stone Massage, and our exclusive Body Mask Detox treatments. You're in good hands with our highly-skilled therapists."
  },
  categories: [
    {
      id: 'massage',
      title: 'MASSAGE',
      subtitle: 'Relax',
      services: [
        {
          id: 'balinese-massage',
          name: 'Balinese Massage',
          description: 'Balinese Massage uses a combination of gentle stretches, acupressure, reflexology, and aromatherapy to stimulate the flow of blood, oxygen, and energy around your body. Bringing a sense of well being calm and deep relaxation.',
          duration60: '60 minutes',
          duration90: '90 minutes',
          price60: 1150,
          price90: 1650
        },
        {
          id: 'deep-tissue-massage',
          name: 'Deep Tissue Massage',
          description: 'Deep Tissue Massage uses the arms and elbows to target deeper layers of muscle tissue, slow and focused techniques are used to address specific areas of chronic muscle tension or pain.',
          duration60: '60 minutes',
          duration90: '90 minutes',
          price60: 1000,
          price90: 1450
        },
        {
          id: 'reflexology',
          name: 'Reflexology',
          description: 'Reflexology is a therapeutic method of stimulating predefined pressure points on the feet and hands employing hand techniques without oil or lotion.',
          duration60: '60 minutes',
          duration90: '90 minutes',
          price60: 1100,
          price90: 1600
        },
        {
          id: 'light-swedish-massage',
          name: 'Light Swedish Massage',
          description: 'Swedish Massage uses a light touch for sensitive clients. Increases blood circulation, encourages relaxation.',
          duration60: '60 minutes',
          duration90: '90 minutes',
          price60: 1000,
          price90: 1450
        },
        {
          id: 'couples-massage',
          name: 'Couples Massage',
          description: 'Share the bliss with your partner, and enjoy the benefits of massage, to relax and unwind in our private couples room.',
          duration60: '60 minutes',
          duration90: '90 minutes',
          price60: 1900,
          price90: 2900
        }
      ]
    },
    {
      id: 'signature-treatments',
      title: 'SIGNATURE TREATMENTS',
      subtitle: 'Rebalance',
      services: [
        {
          id: 'thai-herbal-poultice',
          name: 'Thai Herbal Poultice',
          description: 'The poultice can reduce inflammation, promote circulation, relieve joint pain and stiffness, calms muscle spasms, immune system, and tones the skin. The warmth of the pouches, rocking motion of the therapy, and aroma of the herbs combine to produce a deeply soothing experience.',
          duration60: '60 minutes',
          duration90: '90 minutes',
          price60: 1800,
          price90: 2550
        },
        {
          id: 'warm-bamboo',
          name: 'Warm Bamboo',
          description: 'The Bamboo Massage promotes circulation, sensory nerve perception, and lymphatic drainage, as well as providing a deep sense of relaxation and well being.',
          duration60: '60 minutes',
          duration90: '90 minutes',
          price60: 1700,
          price90: 2450
        },
        {
          id: 'aroma-stone',
          name: 'Aroma Stone',
          description: 'The hot stone massage is beneficial on both physical and psychological levels. Overly tense muscles can hinder the massage procedure, so if your muscle is extremely tight or stiff, the heated stones may provide the extra relaxation you need for the massage to be of maximum benefit in releasing tension and easing sore muscles.',
          duration60: '60 minutes',
          duration90: '90 minutes',
          price60: 1750,
          price90: 2400
        }
      ]
    },
    {
      id: 'body-scrub-glow',
      title: 'Body Scrub Glow',
      subtitle: 'Rejuvenate',
      treatments: [
        {
          id: 'coffee-apricot-scrub',
          name: 'Coffee and Apricot',
          description: 'A Coffee Apricot Scrub exfoliates the skin, removing your dry and dead skin to reveal the new healthy-looking skin underneath. Caffeine provides several skin benefits, including improved texture and circulation, with a temporary cellulite reduction. Apricot and Caffeine are loaded with antioxidants, which help to fight premature skin aging like wrinkles, sun spots, and fine lines. Moreover, Apricot seeds contain a compound called B17 that fights cancer and protects our bodies from free radicals and cell damage from pollution, UV rays, and smoke.'
        },
        {
          id: 'glutathione-whitening',
          name: 'Glutathione Whitening',
          description: 'Like Vitamin C and E, Glutathione is an important antioxidant in the body. What\'s special about Glutathione is that it is positioned within the cell, making it perfectly placed to carry out its job.',
          price: 1100
        }
      ]
    },
    {
      id: 'body-mask-detox',
      title: 'Body Mask Detox',
      subtitle: 'Detoxify',
      treatments: [
        {
          id: 'black-mud-mineral',
          name: 'Black Mud and Mineral',
          description: 'A heated Dead Sea mineral black mud mask containing a warming blend of essential oils is applied to your body before you are cocooned in a comforting wrap. As you relax, our natural ingredients will detoxify, decongest and stimulate your body systems. Dead Sea Salts contains 21 minerals including magnesium, calcium, sulfur, bromide, iodine, sodium, zinc and potassium. These essential minerals occur naturally in our bodies, but must be replenished as they are lost throughout the day. These minerals are known to treat, detoxify and cleanse our bodies.'
        },
        {
          id: 'whitening-clay-mask',
          name: 'Whitening Clay Mask',
          description: 'A Clay Mask has many benefits. It stimulates and increases circulation, tightens sagging skin, refines enlarged pores, exfoliates by lifting dead cells and cleanses the skin like no other mask. Clay masks are suitable for all skin types. For acne skin, it rids the skin for impurities that cause breakouts.',
          price: 1350
        }
      ]
    },
    {
      id: 'foot-nail-care',
      title: 'Foot and Nail Care',
      subtitle: 'Pamper',
      treatments: [
        {
          id: 'essential-manicure',
          name: 'Essential Manicure',
          price: 350
        },
        {
          id: 'manicure-with-color',
          name: 'Manicure with Color',
          price: 400
        },
        {
          id: 'essential-pedicure',
          name: 'Essential Pedicure',
          price: 450
        },
        {
          id: 'pedicure-with-color',
          name: 'Pedicure with Color',
          price: 500
        },
        {
          id: 'foot-spa',
          name: 'Foot Spa – Pedicure, Scrub, and Massage',
          price: 1200
        },
        {
          id: 'foot-heaven',
          name: 'Foot Heaven – Foot Spa, Mask, and Stone Massage',
          price: 1500
        }
      ]
    }
  ],
  packages: [
    {
      id: 'package-a',
      name: 'Package A',
      description: 'Nail Care, Whitening Mask / Black Mud, and Ventusa Massage',
      price: 3300
    },
    {
      id: 'package-b',
      name: 'Package B',
      description: 'Foot Spa, Body Scrub, and Warm Bamboo or Aroma Stone Massage',
      price: 3750
    },
    {
      id: 'package-c',
      name: 'Package C',
      description: 'Foot Heaven, Ear Candle, and Thai Herbal Poultice',
      price: 4150
    }
  ],
  bookingInfo: {
    title: 'Escape',
    description: 'Start your vacation relaxed by unwinding after your journey. Book your massage or treatments before your arrival. If time permits, and you\'re staying for a few days, our therapists at WellZen Spa can design a personalized luxury treatment program, providing the ultimate in pampering throughout your stay.'
  }
}; 