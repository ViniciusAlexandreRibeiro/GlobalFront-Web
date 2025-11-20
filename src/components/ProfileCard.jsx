import { memo } from 'react';
import { MapPin, Briefcase } from 'lucide-react';

const ProfileCard = memo(({ profile, onClick }) => {
  if (!profile) return null;

  return (
    <div
      onClick={() => onClick(profile)}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden border border-gray-200 dark:border-gray-700 hover:scale-105"
    >
      {/* Foto de capa */}
      <div 
        className="h-24 bg-cover bg-center" 
        style={{ 
          background: profile.capa,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>
      
      {/* Foto e informações do perfil */}
      <div className="relative px-6 pb-6">
        <div className="absolute -top-12">
          <img
            src={profile.foto}
            alt={profile.nome}
            className="w-24 h-24 rounded-full border-4 border-white dark:border-gray-800 object-cover"
          />
        </div>
        
        <div className="pt-14">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
            {profile.nome}
          </h3>
          
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mb-2">
            <Briefcase className="w-4 h-4" />
            <p className="text-sm font-medium">{profile.cargo}</p>
          </div>
          
          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-3">
            <MapPin className="w-4 h-4" />
            <p className="text-sm">{profile.localizacao}</p>
          </div>
          
          {/* Badge da área */}
          <div className="mb-3">
            <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-semibold rounded-full">
              {profile.area}
            </span>
          </div>
          
          {/* Skills */}
          <div className="mb-3">
            <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Habilidades Técnicas:
            </p>
            <div className="flex flex-wrap gap-1">
              {profile.habilidadesTecnicas.slice(0, 4).map((skill, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
                >
                  {skill}
                </span>
              ))}
              {profile.habilidadesTecnicas.length > 4 && (
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">
                  +{profile.habilidadesTecnicas.length - 4}
                </span>
              )}
            </div>
          </div>
          
          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
            {profile.resumo}
          </p>
        </div>
      </div>
    </div>
  );
});

ProfileCard.displayName = 'ProfileCard';

export default ProfileCard;
