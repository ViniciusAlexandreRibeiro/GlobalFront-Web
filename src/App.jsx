import { useState, useMemo, useCallback } from 'react';
import ProfileCard from './components/ProfileCard';
import ProfileModal from './components/ProfileModal';
import SearchBar from './components/SearchBar';
import { mockProfiles, uniqueAreas, uniqueCidades, uniqueSkills } from './data/mockProfiles';
import { Moon, Sun } from 'lucide-react';

function App() {
  const [profiles] = useState(mockProfiles);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  
  // Todos os filtros em um único state
  const [filters, setFilters] = useState({
    searchTerm: '',
    selectedArea: '',
    selectedLocation: '',
    selectedSkill: ''
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const handleProfileClick = (profile) => {
    setSelectedProfile(profile);
  };

  // Fecha o modal
  const handleCloseModal = () => {
    setSelectedProfile(null);
  };

  // Filtra os perfis baseado nos filtros escolhidos
  const filteredProfiles = useMemo(() => {
    if (!profiles || !Array.isArray(profiles) || profiles.length === 0) {
      return [];
    }

    try {
      const result = profiles.filter((profile) => {
        if (!profile || typeof profile !== 'object') return false;

        // Busca por nome ou cargo
        const searchTerm = filters.searchTerm || '';
        const matchesSearch = !searchTerm || 
          (profile.nome && profile.nome.toLowerCase().includes(searchTerm.toLowerCase())) ||
          (profile.cargo && profile.cargo.toLowerCase().includes(searchTerm.toLowerCase()));
        
        // Filtra por área
        const matchesArea = !filters.selectedArea || profile.area === filters.selectedArea;
        
        // Filtra por cidade
        const matchesLocation = !filters.selectedLocation || profile.localizacao === filters.selectedLocation;
        
        // Filtra por skill
        const matchesSkill = !filters.selectedSkill || 
          (Array.isArray(profile.habilidadesTecnicas) && profile.habilidadesTecnicas.includes(filters.selectedSkill));
        
        return matchesSearch && matchesArea && matchesLocation && matchesSkill;
      });
      
      return Array.isArray(result) ? result : [];
    } catch (error) {
      console.error('Erro ao filtrar perfis:', error);
      return [];
    }
  }, [profiles, filters]);

  // Limpa todos os filtros
  const clearAllFilters = useCallback(() => {
    setFilters({
      searchTerm: '',
      selectedArea: '',
      selectedLocation: '',
      selectedSkill: ''
    });
  }, []);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        {/* Cabeçalho fixo */}
        <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                  Futuro do Trabalho
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Conectando profissionais do futuro
                </p>
              </div>
              
              {/* Botão de dark mode */}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <Sun className="w-6 h-6 text-yellow-500" />
                ) : (
                  <Moon className="w-6 h-6 text-gray-700" />
                )}
              </button>
            </div>
          </div>
        </header>

        {/* Conteúdo principal */}
        <main className="container mx-auto px-4 py-8">
          {/* Estatísticas */}
          <div className="mb-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                    {filteredProfiles.length}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                    Profissionais{filters.searchTerm || filters.selectedArea || filters.selectedLocation || filters.selectedSkill ? ' (filtrados)' : ''}
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                    {uniqueAreas.length}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                    Áreas de Atuação
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-green-600 dark:text-green-400">
                    {uniqueCidades.length}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                    Cidades
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Barra de busca e filtros */}
          <SearchBar
            filters={filters}
            setFilters={setFilters}
            clearAllFilters={clearAllFilters}
            areas={uniqueAreas}
            locations={uniqueCidades}
            skills={uniqueSkills}
          />

          {/* Lista de perfis */}
          <div>
            {Array.isArray(filteredProfiles) && filteredProfiles.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProfiles.map((profile) => (
                  profile && profile.id ? (
                    <ProfileCard
                      key={profile.id}
                      profile={profile}
                      onClick={handleProfileClick}
                    />
                  ) : null
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-xl text-gray-600 dark:text-gray-400">
                  Nenhum perfil encontrado com os filtros aplicados.
                </p>
                <button
                  onClick={clearAllFilters}
                  className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                >
                  Limpar filtros
                </button>
              </div>
            )}
          </div>
        </main>

        {/* Rodapé */}
        <footer className="bg-white dark:bg-gray-800 mt-16 py-8 border-t border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4 text-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
              © 2024 Futuro do Trabalho - Global Solution
            </p>
            <p className="text-gray-500 dark:text-gray-500 text-xs">
              Desenvolvido por Vinicius Alexandre Aureliano Ribeiro - RM: 561606
            </p>
          </div>
        </footer>

        {/* Modal de detalhes do perfil */}
        {selectedProfile && (
          <ProfileModal
            profile={selectedProfile}
            onClose={handleCloseModal}
          />
        )}
      </div>
    </div>
  );
}

export default App;
