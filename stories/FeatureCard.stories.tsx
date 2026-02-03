import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { FeatureCard } from '../components/ui/FeatureCard';
import { MapPin, Shield, Clock, CreditCard } from 'lucide-react';

const meta: Meta<typeof FeatureCard> = {
  title: 'UI/FeatureCard',
  component: FeatureCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'gradient'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Búsqueda Inteligente',
    description: 'Encuentra las plazas más baratas y cercanas con nuestro algoritmo de IA en tiempo real.',
    icon: <MapPin className="w-6 h-6" />,
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    title: 'Pago sin Contacto',
    description: 'Olvida el efectivo. Paga con Apple Pay, Google Pay o tarjeta.',
    icon: <CreditCard className="w-6 h-6" />,
    variant: 'secondary',
  },
};

export const Gradient: Story = {
  args: {
    title: 'Ahorro de Tiempo',
    description: 'Reserva en 3 clics y navega directamente a tu plaza.',
    icon: <Clock className="w-6 h-6 text-white" />,
    variant: 'gradient',
  },
};

export const DefaultVariant: Story = {
  args: {
    title: 'Seguridad Garantizada',
    description: 'Solo trabajamos con parkings verificados con videovigilancia 24/7.',
    icon: <Shield className="w-6 h-6" />,
    variant: 'default',
  },
};
