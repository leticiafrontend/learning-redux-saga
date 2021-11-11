import { Main } from 'components/Main'
import { GlobalStyles } from 'styles/global'

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Main
        title="React JS - Boilerplate"
        description="React, TypeScript, Styled Components, Storybook, Eslint, Prettier, Husky, React Testing Library, Jest and Jest Styled Components!"
      />
    </>
  )
}

export default App
