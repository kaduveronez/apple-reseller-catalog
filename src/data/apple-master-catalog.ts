import { AppleProduct } from '@/types/catalog';

export const APPLE_MASTER_CATALOG: AppleProduct[] = [
  // --- IPHONES ---
  {
    id: 'iphone-16-pro-max',
    category: 'iphone',
    name: 'iPhone 16 Pro Max',
    family: 'iPhone',
    tagline: 'Construído em Titânio. Superpotência com Chip A18 Pro.',
    releaseYear: '2024',
    defaultImage: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-model-unselect-gallery-2-202409_GEO_EMEA?wid=5120&hei=2880&fmt=webp',
    heroImage: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-9inch-deserttitanium?wid=5120&hei=2880&fmt=p-jpg',
    colors: [
      {
        name: 'Titânio Deserto',
        hex: '#C5A992',
        imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-9inch-deserttitanium?wid=1000&hei=1000&fmt=png-alpha',
      },
      {
        name: 'Titânio Natural',
        hex: '#9F9E99',
        imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-9inch-naturaltitanium?wid=1000&hei=1000&fmt=png-alpha',
      },
      {
        name: 'Titânio Branco',
        hex: '#F2F1ED',
        imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-9inch-whitetitanium?wid=1000&hei=1000&fmt=png-alpha',
      },
      {
        name: 'Titânio Preto',
        hex: '#3C3B37',
        imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-9inch-blacktitanium?wid=1000&hei=1000&fmt=png-alpha',
      },
    ],
    storageOptions: ['256GB', '512GB', '1TB'],
    specs: {
      chip: 'A18 Pro com GPU de 6 núcleos e Neural Engine de 16 núcleos',
      display: 'Super Retina XDR OLED de 6,9 pol. com ProMotion 120Hz e Tela Sempre Ativa',
      camera: 'Sistema Pro de 48 MP (Fusão, Ultra-angular 48 MP e Teleobjetiva 5x de 12 MP)',
      battery: 'Até 33 horas de reprodução de vídeo',
      connectivity: 'USB-C com suporte a USB 3 (até 10 Gb/s), 5G, Wi-Fi 7',
      ports: 'USB-C',
      highlights: [
        'Design inovador em titânio grau 5 com bordas mais finas do mundo',
        'Novo Controle da Câmera tátil e capacitivo com feedback háptico',
        'Gravação de vídeo em 4K Dolby Vision a 120 qps para cinema',
        'Apple Intelligence integrada para tarefas inteligentes do dia a dia',
      ],
    },
  },
  {
    id: 'iphone-16-pro',
    category: 'iphone',
    name: 'iPhone 16 Pro',
    family: 'iPhone',
    tagline: 'Titânio extraordinário. Câmeras profissionais compactas.',
    releaseYear: '2024',
    defaultImage: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-model-unselect-gallery-1-202409?wid=5120&hei=2880&fmt=webp',
    colors: [
      {
        name: 'Titânio Natural',
        hex: '#9F9E99',
        imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-3inch-naturaltitanium?wid=1000&hei=1000&fmt=png-alpha',
      },
      {
        name: 'Titânio Deserto',
        hex: '#C5A992',
        imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-3inch-deserttitanium?wid=1000&hei=1000&fmt=png-alpha',
      },
      {
        name: 'Titânio Branco',
        hex: '#F2F1ED',
        imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-3inch-whitetitanium?wid=1000&hei=1000&fmt=png-alpha',
      },
      {
        name: 'Titânio Preto',
        hex: '#3C3B37',
        imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-3inch-blacktitanium?wid=1000&hei=1000&fmt=png-alpha',
      },
    ],
    storageOptions: ['128GB', '256GB', '512GB', '1TB'],
    specs: {
      chip: 'A18 Pro de última geração',
      display: 'Super Retina XDR OLED de 6,3 pol. com ProMotion 120Hz',
      camera: 'Sistema de 48 MP com teleobjetiva tetraprisma de 5x',
      battery: 'Até 27 horas de reprodução de vídeo',
      connectivity: 'USB-C com USB 3 (até 10 Gb/s), Wi-Fi 7',
      ports: 'USB-C',
      highlights: [
        'Controle da Câmera dedicado para zoom e foco instantâneo',
        '4 microfones de estúdio para redução inteligente de ruído do vento',
        'Acabamento em titânio fosco ultraleve e resistente',
      ],
    },
  },
  {
    id: 'iphone-16',
    category: 'iphone',
    name: 'iPhone 16',
    family: 'iPhone',
    tagline: 'Cores vibrantes. Chip A18. Controle da Câmera revolucionário.',
    releaseYear: '2024',
    defaultImage: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-ultramarine?wid=1000&hei=1000&fmt=png-alpha',
    colors: [
      {
        name: 'Ultramarino',
        hex: '#476885',
        imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-ultramarine?wid=1000&hei=1000&fmt=png-alpha',
      },
      {
        name: 'Verde-acinzentado',
        hex: '#97A99D',
        imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-teal?wid=1000&hei=1000&fmt=png-alpha',
      },
      {
        name: 'Rosa',
        hex: '#E39BB6',
        imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-pink?wid=1000&hei=1000&fmt=png-alpha',
      },
      {
        name: 'Branco',
        hex: '#F9F6EF',
        imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-white?wid=1000&hei=1000&fmt=png-alpha',
      },
      {
        name: 'Preto',
        hex: '#35393B',
        imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-black?wid=1000&hei=1000&fmt=png-alpha',
      },
    ],
    storageOptions: ['128GB', '256GB', '512GB'],
    specs: {
      chip: 'A18 com Neural Engine de 16 núcleos',
      display: 'Super Retina XDR OLED de 6,1 pol. com Ceramic Shield de última geração',
      camera: 'Sistema de câmera dupla de 48 MP Fusão com teleobjetiva 2x com qualidade óptica',
      battery: 'Até 22 horas de reprodução de vídeo',
      connectivity: 'USB-C, 5G, Wi-Fi 7',
      ports: 'USB-C',
      highlights: [
        'Botão de Ação personalizável na lateral',
        'Controle da Câmera tátil e intuitivo',
        'Cores com infusão de cor no vidro traseiro',
      ],
    },
  },
  {
    id: 'iphone-15-pro-max',
    category: 'iphone',
    name: 'iPhone 15 Pro Max',
    family: 'iPhone',
    tagline: 'O titânio pioneiro com zoom óptico de 5x.',
    releaseYear: '2023',
    defaultImage: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-naturaltitanium?wid=1000&hei=1000&fmt=png-alpha',
    colors: [
      {
        name: 'Titânio Natural',
        hex: '#9F9E99',
        imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-naturaltitanium?wid=1000&hei=1000&fmt=png-alpha',
      },
      {
        name: 'Titânio Azul',
        hex: '#2F3843',
        imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-bluetitanium?wid=1000&hei=1000&fmt=png-alpha',
      },
      {
        name: 'Titânio Branco',
        hex: '#F2F1ED',
        imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-whitetitanium?wid=1000&hei=1000&fmt=png-alpha',
      },
      {
        name: 'Titânio Preto',
        hex: '#3C3B37',
        imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-blacktitanium?wid=1000&hei=1000&fmt=png-alpha',
      },
    ],
    storageOptions: ['256GB', '512GB', '1TB'],
    specs: {
      chip: 'A17 Pro com Ray Tracing acelerado por hardware',
      display: 'Super Retina XDR OLED de 6,7 pol. 120Hz',
      camera: 'Sistema de 48 MP com teleobjetiva periscópica 5x',
      battery: 'Até 29 horas de reprodução de vídeo',
      connectivity: 'USB-C com USB 3 (10 Gb/s)',
      ports: 'USB-C',
      highlights: [
        'Primeiro iPhone construído em titânio aeroespacial',
        'Botão de Ação pioneiro',
        'Desempenho com suporte a jogos de console nativos',
      ],
    },
  },
  {
    id: 'iphone-15',
    category: 'iphone',
    name: 'iPhone 15',
    family: 'iPhone',
    tagline: 'Dynamic Island e câmera de 48 MP ao alcance de todos.',
    releaseYear: '2023',
    defaultImage: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-black?wid=1000&hei=1000&fmt=png-alpha',
    colors: [
      {
        name: 'Preto',
        hex: '#35393B',
        imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-black?wid=1000&hei=1000&fmt=png-alpha',
      },
      {
        name: 'Azul',
        hex: '#CBE0E8',
        imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-blue?wid=1000&hei=1000&fmt=png-alpha',
      },
      {
        name: 'Verde',
        hex: '#CEE3D5',
        imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-green?wid=1000&hei=1000&fmt=png-alpha',
      },
      {
        name: 'Rosa',
        hex: '#F6D2D9',
        imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-pink?wid=1000&hei=1000&fmt=png-alpha',
      },
    ],
    storageOptions: ['128GB', '256GB', '512GB'],
    specs: {
      chip: 'A16 Bionic',
      display: 'Super Retina XDR OLED de 6,1 pol. com Dynamic Island',
      camera: 'Câmera principal avançada de 48 MP com teleobjetiva 2x',
      battery: 'Até 20 horas de reprodução de vídeo',
      connectivity: 'USB-C, 5G',
      ports: 'USB-C',
      highlights: [
        'Dynamic Island para alertas e atividades ao vivo',
        'Vidro traseiro colorido por infusão com textura fosca',
        'Entrada USB-C versátil',
      ],
    },
  },
  {
    id: 'iphone-14',
    category: 'iphone',
    name: 'iPhone 14',
    family: 'iPhone',
    tagline: 'Confiabilidade, grande autonomia e fotografia deslumbrante.',
    releaseYear: '2022',
    defaultImage: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-midnight?wid=1000&hei=1000&fmt=png-alpha',
    colors: [
      {
        name: 'Meia-noite',
        hex: '#1E232A',
        imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-midnight?wid=1000&hei=1000&fmt=png-alpha',
      },
      {
        name: 'Estelar',
        hex: '#FAF6F2',
        imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-starlight?wid=1000&hei=1000&fmt=png-alpha',
      },
      {
        name: 'Azul',
        hex: '#A0B4C7',
        imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-blue?wid=1000&hei=1000&fmt=png-alpha',
      },
      {
        name: 'Roxo',
        hex: '#E5DDEA',
        imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-purple?wid=1000&hei=1000&fmt=png-alpha',
      },
    ],
    storageOptions: ['128GB', '256GB', '512GB'],
    specs: {
      chip: 'A15 Bionic com GPU de 5 núcleos',
      display: 'Super Retina XDR OLED de 6,1 pol.',
      camera: 'Sistema de câmera dupla de 12 MP com Photonic Engine',
      battery: 'Até 20 horas de reprodução de vídeo',
      connectivity: 'Lightning, 5G',
      ports: 'Lightning',
      highlights: [
        'Modo Ação para vídeos estáveis sem gimbal',
        'Detecção de Acidente de carro grave',
        'Excelente custo-benefício em seminovos e novos',
      ],
    },
  },
  {
    id: 'iphone-13',
    category: 'iphone',
    name: 'iPhone 13',
    family: 'iPhone',
    tagline: 'O campeão consagrado de vendas em todo o Brasil.',
    releaseYear: '2021',
    defaultImage: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-finish-select-202207-midnight?wid=1000&hei=1000&fmt=png-alpha',
    colors: [
      {
        name: 'Meia-noite',
        hex: '#1E232A',
        imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-finish-select-202207-midnight?wid=1000&hei=1000&fmt=png-alpha',
      },
      {
        name: 'Estelar',
        hex: '#FAF6F2',
        imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-finish-select-202207-starlight?wid=1000&hei=1000&fmt=png-alpha',
      },
      {
        name: 'Verde',
        hex: '#3A4B3E',
        imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-finish-select-202207-green?wid=1000&hei=1000&fmt=png-alpha',
      },
      {
        name: 'Rosa',
        hex: '#FBE2DD',
        imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-finish-select-202207-pink?wid=1000&hei=1000&fmt=png-alpha',
      },
    ],
    storageOptions: ['128GB', '256GB'],
    specs: {
      chip: 'A15 Bionic',
      display: 'Super Retina XDR OLED de 6,1 pol.',
      camera: 'Sistema de câmera dupla de 12 MP com Modo Cinema',
      battery: 'Até 19 horas de vídeo',
      connectivity: 'Lightning, 5G',
      ports: 'Lightning',
      highlights: [
        'Modo Cinema com foco automático em pessoas',
        'Estabilização óptica de imagem por deslocamento de sensor',
        'Design durável com bordas planas e Ceramic Shield',
      ],
    },
  },

  // --- MACS ---
  {
    id: 'macbook-pro-14-m4',
    category: 'mac',
    name: 'MacBook Pro 14" (M4)',
    family: 'Mac',
    tagline: 'Uma força sobrenatural. Desempenho profissional inacreditável.',
    releaseYear: '2024',
    defaultImage: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spaceblack-select-202410?wid=1000&hei=1000&fmt=png-alpha',
    colors: [
      {
        name: 'Preto-espacial',
        hex: '#2E2F32',
        imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spaceblack-select-202410?wid=1000&hei=1000&fmt=png-alpha',
      },
      {
        name: 'Prateado',
        hex: '#E2E3E5',
        imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-silver-select-202410?wid=1000&hei=1000&fmt=png-alpha',
      },
    ],
    storageOptions: ['512GB SSD', '1TB SSD', '2TB SSD'],
    specs: {
      chip: 'Apple M4, M4 Pro ou M4 Max com até 16 núcleos de CPU e 40 de GPU',
      display: 'Liquid Retina XDR de 14,2 pol. com até 1.600 nits de pico de brilho XDR e ProMotion 120Hz',
      battery: 'Até 24 horas de bateria — a maior já vista em um Mac',
      connectivity: 'Wi-Fi 6E, Bluetooth 5.3, Thunderbolt 4 / 5',
      ports: '3x Thunderbolt, HDMI, slot para cartão SDXC, MagSafe 3, conector para fones',
      highlights: [
        'Câmera Center Stage de 12 MP com suporte à Visualização da Mesa',
        'Tela Liquid Retina XDR disponível com opção de vidro nanotexturizado',
        'Memória unificada ultrarrápida a partir de 16 GB até 128 GB',
      ],
    },
  },
  {
    id: 'macbook-air-13-m3',
    category: 'mac',
    name: 'MacBook Air 13" (M3)',
    family: 'Mac',
    tagline: 'Finura impressionante. Velocidade surpreendente com Chip M3.',
    releaseYear: '2024',
    defaultImage: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba13-midnight-select-202402?wid=1000&hei=1000&fmt=png-alpha',
    colors: [
      {
        name: 'Meia-noite',
        hex: '#1E232A',
        imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba13-midnight-select-202402?wid=1000&hei=1000&fmt=png-alpha',
      },
      {
        name: 'Estelar',
        hex: '#FAF6F2',
        imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba13-starlight-select-202402?wid=1000&hei=1000&fmt=png-alpha',
      },
      {
        name: 'Cinza-espacial',
        hex: '#68696E',
        imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba13-spacegray-select-202402?wid=1000&hei=1000&fmt=png-alpha',
      },
      {
        name: 'Prateado',
        hex: '#E2E3E5',
        imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba13-silver-select-202402?wid=1000&hei=1000&fmt=png-alpha',
      },
    ],
    storageOptions: ['256GB SSD', '512GB SSD'],
    specs: {
      chip: 'Apple M3 com CPU de 8 núcleos e GPU de até 10 núcleos',
      display: 'Liquid Retina de 13,6 pol. com True Tone e 500 nits de brilho',
      battery: 'Até 18 horas de bateria',
      connectivity: 'Wi-Fi 6E, MagSafe 3, 2x portas Thunderbolt / USB 4',
      ports: 'MagSafe 3, 2x Thunderbolt, fones de ouvido 3,5 mm',
      highlights: [
        'Design fanless 100% silencioso em alumínio reciclado',
        'Suporte a até dois monitores externos com a tampa fechada',
        'Apenas 1,13 cm de espessura e 1,24 kg',
      ],
    },
  },
  {
    id: 'mac-mini-m4',
    category: 'mac',
    name: 'Mac mini (M4)',
    family: 'Mac',
    tagline: 'Mais compacto. Mais poderoso. O primeiro Mac neutro em carbono.',
    releaseYear: '2024',
    defaultImage: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-mini-202410-gallery-1?wid=1000&hei=1000&fmt=png-alpha',
    colors: [
      {
        name: 'Prateado',
        hex: '#E2E3E5',
        imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-mini-202410-gallery-1?wid=1000&hei=1000&fmt=png-alpha',
      },
    ],
    storageOptions: ['256GB SSD', '512GB SSD', '1TB SSD'],
    specs: {
      chip: 'Apple M4 ou M4 Pro',
      display: 'Suporte a até três monitores simultâneos',
      ports: '2x USB-C frontais, 3x portas Thunderbolt traseiras, HDMI, Gigabit Ethernet',
      highlights: [
        'Gabinete minúsculo de apenas 12,7 cm x 12,7 cm',
        'Memória unificada inicial de 16 GB ultra veloz',
        'Portas frontais práticas com entrada para fones',
      ],
    },
  },

  // --- IPADS ---
  {
    id: 'ipad-pro-11-m4',
    category: 'ipad',
    name: 'iPad Pro 11" (M4)',
    family: 'iPad',
    tagline: 'Ultrafino. Tela Ultra Retina XDR Tandem OLED. Chip M4 estonteante.',
    releaseYear: '2024',
    defaultImage: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-finish-unselect-gallery-1-202405?wid=1000&hei=1000&fmt=png-alpha',
    colors: [
      {
        name: 'Preto-espacial',
        hex: '#2E2F32',
        imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-finish-unselect-gallery-1-202405?wid=1000&hei=1000&fmt=png-alpha',
      },
      {
        name: 'Prateado',
        hex: '#E2E3E5',
        imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-finish-unselect-gallery-2-202405?wid=1000&hei=1000&fmt=png-alpha',
      },
    ],
    storageOptions: ['256GB', '512GB', '1TB', '2TB'],
    specs: {
      chip: 'Apple M4 com Neural Engine de 38 trilhões de operações por segundo',
      display: 'Ultra Retina XDR Tandem OLED inovadora com contraste de 2.000.000:1',
      camera: 'Câmera traseira grande-angular de 12 MP com scanner LiDAR',
      battery: 'Até 10 horas de autonomia navegando na internet via Wi-Fi',
      ports: 'Thunderbolt / USB 4, Smart Connector',
      highlights: [
        'O produto mais fino já criado pela Apple na história (5,1 mm)',
        'Compatível com Apple Pencil Pro e novo Magic Keyboard de alumínio',
      ],
    },
  },
  {
    id: 'ipad-air-11-m2',
    category: 'ipad',
    name: 'iPad Air 11" (M2)',
    family: 'iPad',
    tagline: 'Novo ar fresco. Chip M2 potente e versátil.',
    releaseYear: '2024',
    defaultImage: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-air-finish-unselect-gallery-1-202405?wid=1000&hei=1000&fmt=png-alpha',
    colors: [
      {
        name: 'Cinza-espacial',
        hex: '#68696E',
        imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-air-finish-unselect-gallery-1-202405?wid=1000&hei=1000&fmt=png-alpha',
      },
      {
        name: 'Estelar',
        hex: '#FAF6F2',
        imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-air-finish-unselect-gallery-2-202405?wid=1000&hei=1000&fmt=png-alpha',
      },
      {
        name: 'Roxo',
        hex: '#D7D3DE',
        imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-air-finish-unselect-gallery-3-202405?wid=1000&hei=1000&fmt=png-alpha',
      },
      {
        name: 'Azul',
        hex: '#D1DEE3',
        imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-air-finish-unselect-gallery-4-202405?wid=1000&hei=1000&fmt=png-alpha',
      },
    ],
    storageOptions: ['128GB', '256GB', '512GB'],
    specs: {
      chip: 'Apple M2',
      display: 'Liquid Retina de 11 pol. com True Tone e ampla tonalidade de cores P3',
      camera: 'Câmera frontal horizontal de 12 MP com Palco Central',
      ports: 'USB-C',
      highlights: [
        'Câmera frontal reposicionada na borda maior para videochamadas perfeitas',
        'Compatível com o novo Apple Pencil Pro com gesto de apertar e giroscópio',
      ],
    },
  },
  {
    id: 'ipad-10-geracao',
    category: 'ipad',
    name: 'iPad (10ª geração)',
    family: 'iPad',
    tagline: 'Colorido, prático e versátil para estudos e família.',
    releaseYear: '2022',
    defaultImage: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-10th-gen-finish-unselect-gallery-1-202210?wid=1000&hei=1000&fmt=png-alpha',
    colors: [
      {
        name: 'Azul',
        hex: '#7A99B8',
        imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-10th-gen-finish-unselect-gallery-1-202210?wid=1000&hei=1000&fmt=png-alpha',
      },
      {
        name: 'Rosa',
        hex: '#E37D8D',
        imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-10th-gen-finish-unselect-gallery-2-202210?wid=1000&hei=1000&fmt=png-alpha',
      },
      {
        name: 'Prateado',
        hex: '#E2E3E5',
        imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-10th-gen-finish-unselect-gallery-3-202210?wid=1000&hei=1000&fmt=png-alpha',
      },
      {
        name: 'Amarelo',
        hex: '#EFE085',
        imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-10th-gen-finish-unselect-gallery-4-202210?wid=1000&hei=1000&fmt=png-alpha',
      },
    ],
    storageOptions: ['64GB', '256GB'],
    specs: {
      chip: 'A14 Bionic',
      display: 'Liquid Retina de 10,9 pol. com True Tone',
      camera: 'Câmera frontal horizontal de 12 MP ultra-angular',
      ports: 'USB-C',
      highlights: [
        'Tela de ponta a ponta sem botão Home',
        'Touch ID no botão superior',
        'Porta USB-C para carregamento rápido',
      ],
    },
  },

  // --- APPLE WATCH ---
  {
    id: 'apple-watch-ultra-2',
    category: 'watch',
    name: 'Apple Watch Ultra 2',
    family: 'Watch',
    tagline: 'O ápice da aventura. Agora em titânio preto espetacular.',
    releaseYear: '2024',
    defaultImage: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-ultra-2-black-select-202409?wid=1000&hei=1000&fmt=png-alpha',
    colors: [
      {
        name: 'Titânio Preto',
        hex: '#2B2B2D',
        imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-ultra-2-black-select-202409?wid=1000&hei=1000&fmt=png-alpha',
      },
      {
        name: 'Titânio Natural',
        hex: '#C0BDB8',
        imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-ultra-2-natural-select-202409?wid=1000&hei=1000&fmt=png-alpha',
      },
    ],
    storageOptions: ['49mm (GPS + Cellular)'],
    specs: {
      chip: 'SiP S9 com gesto de Toque Duplo e Siri no aparelho',
      display: 'Tela Retina Sempre Ativa de até 3.000 nits com cristal de safira plano',
      battery: 'Até 36 horas em uso normal, ou até 72 horas em Modo Pouca Energia',
      highlights: [
        'Caixa robusta de titânio de 49 mm resistente à corrosão',
        'GPS de precisão e dupla frequência (L1 e L5)',
        'Resistência à água de 100 metros com certificação para mergulho recreativo',
      ],
    },
  },
  {
    id: 'apple-watch-series-10',
    category: 'watch',
    name: 'Apple Watch Series 10',
    family: 'Watch',
    tagline: 'O mais fino de sempre. Com a maior tela já colocada em um Apple Watch.',
    releaseYear: '2024',
    defaultImage: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/s10-case-unselect-gallery-1-202409?wid=1000&hei=1000&fmt=png-alpha',
    colors: [
      {
        name: 'Preto Brilhante (Jet Black)',
        hex: '#0A0A0A',
        imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/s10-case-unselect-gallery-1-202409?wid=1000&hei=1000&fmt=png-alpha',
      },
      {
        name: 'Ouro Rosa',
        hex: '#E7C8BE',
        imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/s10-case-unselect-gallery-2-202409?wid=1000&hei=1000&fmt=png-alpha',
      },
      {
        name: 'Prateado',
        hex: '#E2E3E5',
        imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/s10-case-unselect-gallery-3-202409?wid=1000&hei=1000&fmt=png-alpha',
      },
    ],
    storageOptions: ['42mm', '46mm'],
    specs: {
      chip: 'SiP S10 com Neural Engine de 4 núcleos',
      display: 'OLED com amplo ângulo de visão até 40% mais brilhante visto de lado',
      battery: 'Recarga mais rápida: 80% em apenas 30 minutos',
      highlights: [
        'Quase 10% mais fino que a Series 9',
        'Notificações de apneia do sono com validação médica',
        'Sensor de profundidade e temperatura da água para snorkeling',
      ],
    },
  },

  // --- AIRPODS ---
  {
    id: 'airpods-pro-2',
    category: 'airpods',
    name: 'AirPods Pro (2ª geração)',
    family: 'AirPods',
    tagline: 'Cancelamento Ativo de Ruído até 2x superior. Áudio Adaptativo mágica.',
    releaseYear: '2023',
    defaultImage: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-pro-2-hero-select-202409?wid=1000&hei=1000&fmt=png-alpha',
    colors: [
      {
        name: 'Branco',
        hex: '#FFFFFF',
        imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-pro-2-hero-select-202409?wid=1000&hei=1000&fmt=png-alpha',
      },
    ],
    storageOptions: ['Estojo MagSafe (USB-C)'],
    specs: {
      chip: 'Apple H2 nos fones e chip U1 no estojo',
      battery: 'Até 6 horas de áudio com ANC, ou até 30 horas com estojo',
      connectivity: 'Bluetooth 5.3, Estojo USB-C com alto-falante e cordão',
      highlights: [
        'Áudio Adaptativo combina dinamicamente Modo Ambiente e Cancelamento de Ruído',
        'Detecção de Conversa reduz o volume automaticamente quando você começa a falar',
        'Recurso de Saúde Auditiva com teste de audição com validação clínica',
      ],
    },
  },
  {
    id: 'airpods-4-anc',
    category: 'airpods',
    name: 'AirPods 4 com Cancelamento de Ruído',
    family: 'AirPods',
    tagline: 'O design consagrado aberto agora com Cancelamento Ativo de Ruído.',
    releaseYear: '2024',
    defaultImage: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-4-anc-select-202409?wid=1000&hei=1000&fmt=png-alpha',
    colors: [
      {
        name: 'Branco',
        hex: '#FFFFFF',
        imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-4-anc-select-202409?wid=1000&hei=1000&fmt=png-alpha',
      },
    ],
    storageOptions: ['Estojo de Recarga Sem Fio (USB-C)'],
    specs: {
      chip: 'Apple H2 com Áudio Espacial Personalizado',
      battery: 'Até 30 horas de autonomia total com o estojo',
      highlights: [
        'Primeiro fone aberto da Apple com Cancelamento Ativo de Ruído eficaz',
        'Estojo de recarga incrivelmente menor com alto-falante integrado para o app Buscar',
      ],
    },
  },
  {
    id: 'airpods-max-usb-c',
    category: 'airpods',
    name: 'AirPods Max (USB-C)',
    family: 'AirPods',
    tagline: 'O equilíbrio perfeito entre alta fidelidade e a facilidade dos AirPods.',
    releaseYear: '2024',
    defaultImage: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-202409-midnight?wid=1000&hei=1000&fmt=png-alpha',
    colors: [
      {
        name: 'Meia-noite',
        hex: '#232A32',
        imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-202409-midnight?wid=1000&hei=1000&fmt=png-alpha',
      },
      {
        name: 'Estelar',
        hex: '#FAF6F2',
        imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-202409-starlight?wid=1000&hei=1000&fmt=png-alpha',
      },
      {
        name: 'Azul',
        hex: '#9CB2C6',
        imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-202409-blue?wid=1000&hei=1000&fmt=png-alpha',
      },
      {
        name: 'Laranja',
        hex: '#D77259',
        imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-202409-orange?wid=1000&hei=1000&fmt=png-alpha',
      },
      {
        name: 'Roxo',
        hex: '#B2A5BD',
        imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-202409-purple?wid=1000&hei=1000&fmt=png-alpha',
      },
    ],
    storageOptions: ['Padrão com Smart Case'],
    specs: {
      chip: 'Chip H1 em cada concha acústica',
      battery: 'Até 20 horas de reprodução com ANC e Áudio Espacial ativados',
      ports: 'USB-C',
      highlights: [
        'Conector USB-C universal para carregar com o mesmo cabo do seu Mac e iPhone',
        'Acústica com drivers dinâmicos desenhados pela Apple e distorção ultrabaixa',
      ],
    },
  },

  // --- ACESSÓRIOS ---
  {
    id: 'carregador-magsafe',
    category: 'accessories',
    name: 'Carregador MagSafe Oficial',
    family: 'Acessórios',
    tagline: 'Alinhamento magnético perfeito. Recarga sem fio de até 25W.',
    releaseYear: '2024',
    defaultImage: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MX6X3?wid=1000&hei=1000&fmt=png-alpha',
    colors: [
      {
        name: 'Prata com Cabo Trançado',
        hex: '#ECECEC',
        imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MX6X3?wid=1000&hei=1000&fmt=png-alpha',
      },
    ],
    storageOptions: ['1 metro', '2 metros'],
    specs: {
      connectivity: 'USB-C com suporte a Power Delivery e MagSafe rápido',
      highlights: [
        'Carrega até 50% de bateria do iPhone 16 em apenas 30 minutos com adaptador de 30W',
        'Cabo trançado de alta durabilidade',
      ],
    },
  },
  {
    id: 'adaptador-20w-apple',
    category: 'accessories',
    name: 'Adaptador de Energia USB-C de 20W',
    family: 'Acessórios',
    tagline: 'Carregamento rápido, seguro e eficiente em casa ou no trabalho.',
    releaseYear: '2023',
    defaultImage: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MHJE3?wid=1000&hei=1000&fmt=png-alpha',
    colors: [
      {
        name: 'Branco',
        hex: '#FFFFFF',
        imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MHJE3?wid=1000&hei=1000&fmt=png-alpha',
      },
    ],
    storageOptions: ['Padrão Brasileiro 2 Pinos'],
    specs: {
      ports: 'USB-C 20W PD',
      highlights: [
        'Compatível com qualquer aparelho com USB-C',
        'Garantia oficial Apple de segurança contra sobretensão e superaquecimento',
      ],
    },
  },
];

export function getAppleProductById(id: string): AppleProduct | undefined {
  return APPLE_MASTER_CATALOG.find((p) => p.id === id);
}

export function getAppleProductsByCategory(category: string): AppleProduct[] {
  if (category === 'all' || !category) return APPLE_MASTER_CATALOG;
  return APPLE_MASTER_CATALOG.filter((p) => p.category === category);
}
