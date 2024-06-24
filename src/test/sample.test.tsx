import { fireEvent, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { TextInput } from "../view/components/TextInput"
import { Count } from "../view/components/Count"

test('TextInput コンポーネントテスト', () => {
  render(<TextInput />)
  const inputElement = screen.getByRole("textbox")
  expect(inputElement).toBeInTheDocument()
})

test("TextInput イベントテスト", async () => {
  const user = userEvent.setup()
  render(<TextInput />)
  const inputElement = screen.getByRole("textbox")
  await user.type(inputElement, "Vitest Test!")
  expect(screen.getByText("Vitest Test!")).toBeInTheDocument()
})

test('Count component increments count by 1 when the button is clicked', () => {
  const { getAllByText } = render(<Count />);
  const addButtons = getAllByText('+追加');
  const countDisplay = getAllByText('0');

  fireEvent.click(addButtons[0]);

  expect(countDisplay[0]).toHaveTextContent('1');
});

test('Count component increments count2 by 10 when the button is clicked', () => {
  const { getAllByText } = render(<Count />);
  const addButtons = getAllByText('+追加');
  const countDisplays = getAllByText('0');

  fireEvent.click(addButtons[1]); // 2番目の追加ボタンをクリックする

  expect(countDisplays[1]).toHaveTextContent('10');
});

