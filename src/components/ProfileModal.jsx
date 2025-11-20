import { X, MapPin, Briefcase, Mail, ThumbsUp, Building, GraduationCap, Code, Award, Globe, Heart } from 'lucide-react';
import { useState } from 'react';

const ProfileModal = ({ profile, onClose }) => {
  const [activeTab, setActiveTab] = useState('sobre');

  if (!profile) return null;

  const handleRecommend = () => {
    alert(`Você recomendou ${profile.nome}! 👍`);
    console.log('Recomendação enviada para:', profile.nome);
  };

  const handleMessage = () => {
    alert(`Mensagem enviada para ${profile.nome}! 💌`);
    console.log('Mensagem enviada para:', profile.nome);
  };

  const tabs = [
    { id: 'sobre', label: 'Sobre', icon: Briefcase },
    { id: 'experiencia', label: 'Experiência', icon: Building },
    { id: 'educacao', label: 'Educação', icon: GraduationCap },
    { id: 'projetos', label: 'Projetos', icon: Code },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div 
          className="sticky top-0 text-white p-6 rounded-t-lg bg-cover bg-center"
          style={{ 
            background: profile.capa,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Fechar modal"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="flex items-start gap-6">
            <img
              src={profile.foto}
              alt={profile.nome}
              className="w-24 h-24 rounded-full border-4 border-white object-cover"
            />
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-2">{profile.nome}</h2>
              <div className="flex items-center gap-2 mb-2">
                <Briefcase className="w-5 h-5" />
                <p className="text-lg">{profile.cargo}</p>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-5 h-5" />
                <p>{profile.localizacao}</p>
              </div>
              <span className="inline-block px-4 py-1 bg-white/20 backdrop-blur rounded-full text-sm font-semibold">
                {profile.area}
              </span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 sticky top-0 z-10">
          <div className="flex gap-1 px-6 overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-colors whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                      : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Conteúdo das abas */}
        <div className="p-6">
          {/* Aba Sobre */}
          {activeTab === 'sobre' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Sobre
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {profile.resumo}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <Code className="w-5 h-5" />
                  Habilidades Técnicas
                </h3>
                <div className="flex flex-wrap gap-2">
                  {profile.habilidadesTecnicas.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-lg text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  Soft Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {profile.softSkills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-lg text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <Globe className="w-5 h-5" />
                  Idiomas
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {profile.idiomas.map((idioma, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                    >
                      <span className="font-medium text-gray-900 dark:text-white">
                        {idioma.idioma}
                      </span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {idioma.nivel}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Áreas de Interesse
                </h3>
                <div className="flex flex-wrap gap-2">
                  {profile.areaInteresses.map((interesse, index) => (
                    <span
                      key={index}
                      className="px-3 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg text-sm"
                    >
                      {interesse}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Aba Experiência */}
          {activeTab === 'experiencia' && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Experiência Profissional
              </h3>
              {profile.experiencias.map((exp, index) => (
                <div
                  key={index}
                  className="border-l-4 border-blue-500 pl-4 pb-6 last:pb-0"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {exp.cargo}
                      </h4>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">
                        {exp.empresa}
                      </p>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap ml-4">
                      {exp.inicio} - {exp.fim}
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mt-2">
                    {exp.descricao}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Aba Educação */}
          {activeTab === 'educacao' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Formação Acadêmica
                </h3>
                {profile.formacao.map((edu, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-purple-500 pl-4 pb-6 last:pb-0"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {edu.curso}
                        </h4>
                        <p className="text-purple-600 dark:text-purple-400 font-medium">
                          {edu.instituicao}
                        </p>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap ml-4">
                        {edu.ano}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Certificações
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {profile.certificacoes.map((cert, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg"
                    >
                      <Award className="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0" />
                      <span className="text-gray-900 dark:text-white text-sm">
                        {cert}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Aba Projetos */}
          {activeTab === 'projetos' && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Projetos
              </h3>
              {profile.projetos.map((projeto, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600"
                >
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {projeto.titulo}
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    {projeto.descricao}
                  </p>
                  <a
                    href={projeto.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
                  >
                    Ver projeto →
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Botões de ação */}
        <div className="sticky bottom-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-6 rounded-b-lg">
          <div className="flex gap-4 justify-end">
            <button
              onClick={handleRecommend}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
            >
              <ThumbsUp className="w-5 h-5" />
              Recomendar
            </button>
            <button
              onClick={handleMessage}
              className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors"
            >
              <Mail className="w-5 h-5" />
              Enviar Mensagem
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
