import {
  imgPiloto1Foto, imgPiloto2Foto, imgPiloto3Foto,
  imgRecurso4, imgRecurso3,
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
    signatureImg: imgRecurso4,
    signatureColor: '#13B981', // Verde
    brandImg:    null,
    align:       'left',
  },
  {
    id:          'hernan-valenzuela',
    name:        'Hernan',
    lastName:    'Valenzuela',
    description: DESCRIPTION_PILOTO,
    photo:       imgPiloto2Foto,
    signatureImg: imgRecurso3,
    signatureColor: '#00D1FF', // Celeste
    brandImg:    null,
    align:       'right',
  },
  {
    id:          'carlos-bustamante-2',
    name:        'Carlos',
    lastName:    'Bustamante',
    description: DESCRIPTION_PILOTO,
    photo:       imgPiloto3Foto,
    signatureImg: imgRecurso4,
    signatureColor: '#13B981', // Verde
    brandImg:    null,
    align:       'left',
  },
];

// `navegantes` removed — not used in the current app layout
