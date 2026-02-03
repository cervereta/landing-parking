import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { TestimonialCard } from '../components/ui/TestimonialCard';

const meta: Meta<typeof TestimonialCard> = {
  title: 'UI/TestimonialCard',
  component: TestimonialCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    rating: {
      control: { type: 'range', min: 0, max: 5, step: 1 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: 'Increíble app. Ya no pierdo 20 minutos buscando sitio cada mañana. La reserva es instantánea.',
    name: 'Carlos Rodríguez',
    role: 'Conductor Diario',
    avatar: 'https://i.pravatar.cc/150?u=1',
    rating: 5,
  },
};

export const FourStars: Story = {
  args: {
    content: 'Muy buena aplicación, aunque a veces hay problemas con el GPS.',
    name: 'Ana Martínez',
    role: 'Usuario Frecuente',
    avatar: 'https://i.pravatar.cc/150?u=2',
    rating: 4,
  },
};
