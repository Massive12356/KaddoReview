import { useState } from 'react';
import ReviewsPage from './components/ReviewsPage';
import ReviewForm from './components/ReviewForm';

type View = 'reviews' | 'submit';

function App() {
  const [currentView, setCurrentView] = useState<View>('reviews');

  return (
    <>
      {currentView === 'reviews' ? (
        <ReviewsPage onSubmitReview={() => setCurrentView('submit')} />
      ) : (
        <ReviewForm onSuccess={() => setCurrentView('reviews')} />
      )}
    </>
  );
}

export default App;
