const FRAGMENTS = ['🎹','🎻','🎷','🎸','🎺','🥁'];

const PLANETS = [
  [
    'Ceres', 0, 0, 2000, [
      ['Cape Santos', 0.25, 'capital'],
      ['Los Pinos', 1.25, 'industrial'],
      ['Creta', 1.1, 'town'],
      ['Arkadia', 3, 'town']
    ], '#0d1852', '#5b5db8'
  ],
  [
    'Ilaria', 0, -2300, 200, [
      ['Ilaria', 0.25, 'capital'],
    ], '#0d1852', '#5b5db8'
  ],
  [
    'Juno', 0, -3400, 1000, [
      ['Havanna', 0.3, 'town']
    ], '#0d1852', '#5b5db8'
  ],
  [
    'Calisto', -10000, 0, 1000, [
      ['New Havanna', 0.1, 'capital'],
    ], '#0d1852', '#5b5db8'
  ],
  [
    'Arland', -8000, 9200, 1300, [
      ['New Athenia', 0.1, 'industrial'],
      ['Moria', 0.3, 'town'],
      ['Andoban', 0.5, 'town'],
      ['Yandor', 0.7, 'town']
    ], '#0d1852', '#5b5db8'
  ],
]

const FRIENDS = [
  {
    name: 'Kori',
    findSequence: [
      {
        planet: 'Ceres',
        city: 'Creta',
        person: 'dog',
        sequence: [
          "Kori left Creta years ago... he said he was tired of the hectic life here.",
          "He always wanted to live in the town of Arkadia, with some luck you'll find him there!",
        ]
      },
      {
        planet: 'Ceres',
        city: 'Arkadia',
        person: 'cat',
        sequence: [
          "I heard you are looking for Kori the cat. He used to run the windmill here... until he got tired of it.",
          "I recall he spent entire nights looking at Ilaria,\nthe green moon. If I where you I'd look for him\nthere.",
        ]
      },
      {
        planet: 'Ilaria',
        city: 'Ilaria',
        person: 'cat',
        sequence: [
          "Bandi, is it really you? I feel like it's been a lifetime since we last met!",
          "Please, stay at my place tonight! let's play some games and have fun like in the old times.",
          "<The other day>",
          "Ah... that was so fun. I recalled the old times, life was simpler then.",
          "I hope to see you back sometime... Please take this instrument so you don't forget me!"
        ],
        giveInstrument: 1
      }
    ]
  },
  {
    name: 'Ponchi',
    findSequence: [
      {
        planet: 'Ceres',
        city: 'Cape Santos',
        person: 'dog',
        sequence: [
          'I heard you were looking for Ponchi?',
          'His family moved shortly after he finished school',
          'His father got a job at an industrial plant in Arland.'
        ]
      },
      {
        planet: 'Arland',
        city: 'New Athenia',
        person: 'cat',
        sequence: [
          "I'm sorry, I don't recognize this person, but you may want to ask around the nearby towns"
        ]
      },
      {
        planet: 'Arland',
        city: 'Andoban',
        person: 'dog',
        sequence: [
          'Are you the guy from Ceres, looking for my kid Kori?',
          'It saddens me deeply to let you know that he is no longer with us.',
          'Some years ago there was a great accident at the plant I was working on, in New Athenia.',
          'That day Kori wanted to see what dad\'s job was like, he was always so curious.',
          'I regret not having him stay at home. But nothing can be done now.',
          'All we have now are the memories of the good times.',
          'Here, please take this, so you never forget him.',
          '<Received Kori\'s drum>',
        ],
        giveInstrument: 2
      }
    ]
  },
  {
    name: 'Patty',
    findSequence: [
      {
        planet: 'Ceres',
        city: 'Los Pinos',
        person: 'cat',
        sequence: [
          'Ah, Patty was only living here for school,',
          'She returned to her hometown in Juno, Havanna.'
        ]
      },
      {
        planet: 'Juno',
        city: 'Havanna',
        person: 'dog',
        sequence: [
          'Oh yes, I recall little Patty. She had to flee Juno after the second impact.',
          'Those were hard times, the entire planet was flooded for years.',
          'The few people that remained here relied heavily on the shipments from Ceres and Arland,',
          'I believe Patty went with the group of settlers bound to Calisto.'
        ]
      } ,
      {
        planet: 'Calisto',
        city: 'New Havanna',
        person: 'cat',
        sequence: [
          "Hello my old friend!",
          "I have fond memories of us at school. This is actually just placeholder text.",
          "I hope you can replace it with someting awesome becase text is expensive in JS13k"
        ],
        giveInstrument: 3
      }
    ]
  }
]

const NPCs = [
  ['Arland', 'Moria', 'cat', 'Most industrial complexes in this planet can be found around New Athenia.'],
  ['Arland', 'Yandor', 'dog', 'I can\'t wait to finish school so I start working at New Athenia.']
]