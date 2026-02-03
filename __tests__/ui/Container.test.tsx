import React from 'react';
import { render, screen } from '@testing-library/react';
import { Container } from '@/components/ui/Container';

describe('Container', () => {
  it('renders children', () => {
    render(
      <Container>
        <div>Test content</div>
      </Container>
    );
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('applies size classes', () => {
    const { container } = render(<Container size="sm">Small</Container>);
    expect(container.firstChild).toHaveClass('max-w-2xl');
  });

  it('applies custom classes', () => {
    const { container } = render(<Container className="custom-class">Content</Container>);
    expect(container.firstChild).toHaveClass('custom-class');
  });
});
