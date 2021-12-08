import unittest
from human import Human
from unittest.mock import patch


class TestHuman(unittest.TestCase):
    def setUp(self):
        self.human = Human('John', 'Doe')

    def test_human_has_attributes(self):
        self.assertEqual(self.human.first_name, 'John')
        self.assertEqual(self.human.last_name, 'Doe')

    def test_get_all_user_data_success_OK(self):
        with patch('requests.get') as fake_request:
            fake_request.return_value.ok = True
            fake_request.return_value.text = 'SUCCESS'

            response = self.human.get_all_user_data()
            print(response)
            self.assertEqual(response,
                             'SUCCESS')


if __name__ == '__main__':
    unittest.main(verbosity=2)
