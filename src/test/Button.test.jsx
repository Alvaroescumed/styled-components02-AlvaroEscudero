import { getByRole, render, screen } from "@testing-library/react";
import { Button } from "../components/StyledButton";
import { expect, test } from "vitest";

// testeamos que el componente renderice bien
test('Should render correctly', () => {
    render(<Button>test</Button>)
})

// testeamos que el boton en todas sus variantes concuerden con la snaphot 

test('Should match snapshou without props', () => {
    render(<Button>test</Button>)
    expect(screen.getByRole('button')).toMatchSnapshot()
})
test('Should match snapshou with succes prop', () => {
    render(<Button succes>test</Button>)
    expect(screen.getByRole('button')).toMatchSnapshot()
})
test('Should match snapshou with error prop', () => {
    render(<Button error>test</Button>)
    expect(screen.getByRole('button')).toMatchSnapshot()
})
test('Should match snapshou with info prop', () => {
    render(<Button info>test</Button>)
    expect(screen.getByRole('button')).toMatchSnapshot()
})
test('Should match snapshou with warning prop', () => {
    render(<Button warning>test</Button>)
    expect(screen.getByRole('button')).toMatchSnapshot()
})
