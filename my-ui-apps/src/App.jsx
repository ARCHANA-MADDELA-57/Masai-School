import FeedbackForm from './components/apps/FeedbackForm';
import ImageSlideshow from './components/apps/ImageSlideshow';
import TodoApp from './components/apps/TodoApp';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-10 space-y-20">
      <h1 className="text-3xl font-bold text-center">UI Component Integration</h1>
      <FeedbackForm />
      <ImageSlideshow />
      <TodoApp />
    </div>
  );
}

export default App;