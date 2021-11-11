import { render, screen } from '@testing-library/react'
import { Main } from '../../../src/components/Main'

describe('<Main />', () => {
  it('should render page', () => {
    const { container } = render(
      <Main
        title="React JS - Boilerplate"
        description="React, TypeScript, Styled Components, Storybook, Eslint, Prettier, Husky, React Testing Library, Jest and Jest Styled Components!"
      />
    )

    expect(screen.getByText('React JS - Boilerplate')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the colors correctly', () => {
    const { container } = render(
      <Main
        title="React JS - Boilerplate"
        description="React, TypeScript, Styled Components, Storybook, Eslint, Prettier, Husky, React Testing Library, Jest and Jest Styled Components!"
      />
    )

    expect(container.firstChild).toHaveStyle({
      'background-color': '#1f1635ff'
    })
  })
})
