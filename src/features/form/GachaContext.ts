import { createFormContext } from '@mantine/form';

type GachaFormProps = {
  prob: number
  attempts: number
};

// You can give context variables any name
export const [GachaFormProvider, useGachaFormContext, useGachaForm] = createFormContext<GachaFormProps>();

export const PROB_PRESETS = [
  0.1,
  0.2,
  0.25,
  0.3,
  0.333,
  0.4,
  0.5,
  0.6,
  0.7,
  0.75,
  0.8,
  0.9,
  1,
  1.2,
  1.666,
  2,
  3,
  4,
  5,
  6,
  10
];
