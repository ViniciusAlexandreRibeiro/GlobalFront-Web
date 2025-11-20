import { Search, Filter } from 'lucide-react';

const SearchBar = ({ filters, setFilters, clearAllFilters, areas, locations, skills }) => {
  // Atualiza um filtro específico
  const updateFilter = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
      <div className="flex items-center gap-2 mb-4">
        <Filter className="w-5 h-5 text-gray-600 dark:text-gray-400" />
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          Filtros de Busca
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Campo de busca */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar por nome, cargo..."
            value={filters.searchTerm}
            onChange={(e) => updateFilter('searchTerm', e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
          />
        </div>

        {/* Filtro de área */}
        <div>
          <select
            value={filters.selectedArea}
            onChange={(e) => updateFilter('selectedArea', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          >
            <option value="">Todas as Áreas</option>
            {areas.map((area) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
          </select>
        </div>

        {/* Filtro de cidade */}
        <div>
          <select
            value={filters.selectedLocation}
            onChange={(e) => updateFilter('selectedLocation', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          >
            <option value="">Todas as Cidades</option>
            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>

        {/* Filtro de tecnologia */}
        <div>
          <select
            value={filters.selectedSkill}
            onChange={(e) => updateFilter('selectedSkill', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          >
            <option value="">Todas as Tecnologias</option>
            {skills.map((skill) => (
              <option key={skill} value={skill}>
                {skill}
              </option>
            ))}
          </select>
        </div>
      </div>
      
      {/* Mostra os filtros ativos */}
      {(filters.searchTerm || filters.selectedArea || filters.selectedLocation || filters.selectedSkill) && (
        <div className="mt-4 flex items-center gap-2 flex-wrap">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            Filtros ativos:
          </span>
          {filters.searchTerm && (
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
              Busca: "{filters.searchTerm}"
            </span>
          )}
          {filters.selectedArea && (
            <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">
              Área: {filters.selectedArea}
            </span>
          )}
          {filters.selectedLocation && (
            <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">
              Local: {filters.selectedLocation}
            </span>
          )}
          {filters.selectedSkill && (
            <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-sm">
              Skill: {filters.selectedSkill}
            </span>
          )}
          <button
            onClick={clearAllFilters}
            type="button"
            className="text-sm text-red-600 dark:text-red-400 hover:underline ml-2"
          >
            Limpar filtros
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
