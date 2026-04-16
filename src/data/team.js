import {
  imgPiloto1Foto, imgPiloto2Foto, imgPiloto3Foto,
  signCarlosBustamante, signHernanValenzuela,
} from '../assets.js';

const DESCRIPTION_PILOTO =
  'Una descripción del piloto que nos diga algo que sea relevante y que nos haga mas cercano al corredor.';

export const pilotes = [
  {
    id:          'carlos-bustamante-1',
    name:        'Carlos',
    lastName:    'Bustamante',
    description: DESCRIPTION_PILOTO,
    photo:       imgPiloto1Foto,
    signatureImg: signCarlosBustamante,
    signatureColor: '#00FFD1',
    brandImg:    null,
    align:       'left',
    signatureAlign: 'left',
  },
  {
    id:          'hernan-valenzuela',
    name:        'Hernan',
    lastName:    'Valenzuela',
    description: DESCRIPTION_PILOTO,
    photo:       imgPiloto2Foto,
    signatureImg: signHernanValenzuela,
    signatureColor: '#00FFD1',
    brandImg:    null,
    align:       'right',
    signatureAlign: 'right',
  },
  {
    id:          'carlos-bustamante-2',
    name:        'Carlos',
    lastName:    'Bustamante',
    description: DESCRIPTION_PILOTO,
    photo:       imgPiloto3Foto,
    signatureImg: signCarlosBustamante,
    signatureColor: '#00FFD1',
    brandImg:    null,
    align:       'left',
    signatureAlign: 'left',
  },
];

// `navegantes` removed — not used in the current app layout
