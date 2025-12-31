import React, { useContext } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
// FIXED IMPORTS: Added '../' to step out of the __tests__ folder
import { FavouritesProvider, FavouritesContext } from '../context/FavouritesContext';
import SearchForm from '../components/SearchForm';

/* -------------------------------------------------------------------
   HELPER COMPONENT FOR CONTEXT TESTS
   This allows us to access the context values inside the test environment
------------------------------------------------------------------- */
const TestContextComponent = () => {
  const { favourites, addFavourite, removeFavourite } = useContext(FavouritesContext);
  
  return (
    <div>
      <div data-testid="fav-count">{favourites.length}</div>
      <button onClick={() => addFavourite({ id: 'prop1', title: 'Test House' })}>
        Add Property
      </button>
      <button onClick={() => removeFavourite('prop1')}>
        Remove Property
      </button>
    </div>
  );
};

/* -------------------------------------------------------------------
   TEST SUITE: Coursework Requirements (5 Tests)
------------------------------------------------------------------- */
describe('Coursework Required Tests', () => {

  // --- TESTS 1-3: Favourites Context Logic ---
  
  describe('Favourites Feature', () => {
    
    // Test 1: Add to Favourites
    test('1. Adds a property to the favourites list', () => {
      render(
        <FavouritesProvider>
          <TestContextComponent />
        </FavouritesProvider>
      );

      // Check initial state is 0
      expect(screen.getByTestId('fav-count')).toHaveTextContent('0');

      // Click add
      fireEvent.click(screen.getByText('Add Property'));

      // Check count increased to 1
      expect(screen.getByTestId('fav-count')).toHaveTextContent('1');
    });

    // Test 2: Prevent Duplicates
    test('2. Prevents adding the same property twice', () => {
      render(
        <FavouritesProvider>
          <TestContextComponent />
        </FavouritesProvider>
      );

      // Click add twice
      fireEvent.click(screen.getByText('Add Property'));
      fireEvent.click(screen.getByText('Add Property'));

      // Count should still be 1, not 2
      expect(screen.getByTestId('fav-count')).toHaveTextContent('1');
    });

    // Test 3: Remove from Favourites
    test('3. Removes a property from the favourites list', () => {
      render(
        <FavouritesProvider>
          <TestContextComponent />
        </FavouritesProvider>
      );

      // Add then remove
      fireEvent.click(screen.getByText('Add Property'));
      fireEvent.click(screen.getByText('Remove Property'));

      // Count should return to 0
      expect(screen.getByTestId('fav-count')).toHaveTextContent('0');
    });
  });

  // --- TESTS 4-5: Search Form Logic ---

  describe('Search Functionality', () => {
    // Mock data for SearchForm
    const mockSetFilters = jest.fn();
    const mockOnSearch = jest.fn();
    const initialFilters = {
      postcode: '',
      type: '',
      minBeds: '',
      maxBeds: '',
      minPrice: '',
      maxPrice: ''
    };

    beforeEach(() => {
      jest.clearAllMocks();
    });

    // Test 4: Input Update
    test('4. Updates the postcode input field when user types', () => {
      render(
        <SearchForm 
          filters={initialFilters} 
          setFilters={mockSetFilters} 
          onSearch={mockOnSearch} 
        />
      );

      const input = screen.getByPlaceholderText(/Postcode area eg SW1/i);
      
      // Simulate typing
      fireEvent.change(input, { target: { value: 'NW1' } });

      // Check if setFilters was called with new value
      expect(mockSetFilters).toHaveBeenCalledWith({
        ...initialFilters,
        postcode: 'NW1'
      });
    });

    // Test 5: Submit Search
    test('5. Triggers the search function when button is clicked', () => {
      render(
        <SearchForm 
          filters={initialFilters} 
          setFilters={mockSetFilters} 
          onSearch={mockOnSearch} 
        />
      );

      const button = screen.getByRole('button', { name: /Search/i });
      
      // Click search
      fireEvent.click(button);

      // Check if onSearch was called
      expect(mockOnSearch).toHaveBeenCalledTimes(1);
    });
  });
});