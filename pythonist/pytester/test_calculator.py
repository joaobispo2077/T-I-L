import unittest
from calculator import sum


class TestSum(unittest.TestCase):
    def test_should_return_sum_of_two_numbers(self):
        self.assertEqual(sum(1, 2), 3)

    def test_should_not_sum_text_with_numbers(self):
        with self.assertRaises(TypeError):
            sum('1', 2)


unittest.main(verbosity=2)
