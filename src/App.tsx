import React from 'react';
import { ShoppingCart, Bot, Brain, Zap, Shield } from 'lucide-react';

interface AIAgent {
  id: number;
  name: string;
  description: string;
  price: number;
  icon: React.ReactNode;
}

const aiAgents: AIAgent[] = [
  {
    id: 1,
    name: "AssistenteIA Pro",
    description: "Um assistente virtual avançado para tarefas diárias e produtividade.",
    price: 99.99,
    icon: <Bot className="w-8 h-8 text-blue-500" />,
  },
  {
    id: 2,
    name: "AnalisadorIA",
    description: "Ferramenta de análise de dados impulsionada por IA para insights de negócios.",
    price: 149.99,
    icon: <Brain className="w-8 h-8 text-purple-500" />,
  },
  {
    id: 3,
    name: "AutomatorIA",
    description: "Automatize fluxos de trabalho complexos com este agente de IA inteligente.",
    price: 199.99,
    icon: <Zap className="w-8 h-8 text-yellow-500" />,
  },
  {
    id: 4,
    name: "SegurançaIA",
    description: "Proteja seus sistemas com este agente de segurança cibernética baseado em IA.",
    price: 249.99,
    icon: <Shield className="w-8 h-8 text-green-500" />,
  },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">Mercado de Agentes IA</h1>
          <ShoppingCart className="w-6 h-6 text-gray-600" />
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Agentes IA Disponíveis</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aiAgents.map((agent) => (
            <div key={agent.id} className="bg-white rounded-lg shadow-md p-6 flex flex-col">
              <div className="flex items-center justify-center mb-4">
                {agent.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{agent.name}</h3>
              <p className="text-gray-600 mb-4 flex-grow">{agent.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-green-600">R${agent.price.toFixed(2)}</span>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                  Comprar
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Mercado de Agentes IA. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;