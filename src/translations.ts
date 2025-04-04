const translations = {
    en: {
        disabled: 'disabled',
        sleeping: 'disabled',
        active: 'active',
        charging: 'charging',
        'not connected': 'waiting',
        connected: 'connected',
        error: 'error',
        power: 'power',
        current: 'current',
        session: 'session',
        elapsed: 'elapsed',
        'charge rate': 'charge rate',
        required_entities: 'Required entities',
        entity_auto_success: 'All required entities were automatically found',
        entity_auto_fail: 'Some entities could not be automatically detected',
        entity_auto_loading: 'Loading device entities',
        'additional entities': 'Additional entities',
        'new limit': 'New Limit',
        'add charging limit': 'Add Charging Limit',
        time: 'Time',
        energy: 'Energy',
        battery: 'Battery',
        range: 'Range',
        hours: 'Hours',
        minutes: 'Minutes',
        cancel: 'Cancel',
        'add limit': 'Add Limit',
        'header title': 'Header Title',
        'display header': 'Display header',
        features: 'Features',
        'enable vehicle battery': 'Enable Vehicle Battery',
        'enable vehicle range': 'Enable Vehicle Range',
        'limits settings': 'Limits settings',
        'maximum charge energy': 'Maximum charge energy (kWh)',
        'maximum vehicle range': 'Maximum vehicle range (miles|km)',
        'openevse device': 'OpenEVSE Device',
        'select your openevse device':
            'Select your OpenEVSE device to automatically populate all entities',
        'override state': 'Override State',
        'select openevse.override_state entity':
            'Select openevse.override_state entity',
        'station status': 'Station Status',
        'select openevse.station_status entity':
            'Select openevse.station_status entity',
        'current power usage': 'Current power usage',
        'select openevse.current_power_usage entity':
            'Select openevse.current_power_usage entity',
        'charging current': 'Charging current',
        'select openevse.charging_current entity':
            'Select openevse.charging_current entity',
        'vehicle connected': 'Vehicle Connected',
        'select openevse.vehicle_connected entity':
            'Select openevse.vehicle_connected entity',
        'charging status': 'Charging status',
        'select openevse.charging_status entity':
            'Select openevse.charging_status entity',
        'session energy': 'Session Energy',
        'select openevse.usage_this_session entity':
            'Select openevse.usage_this_session entity',
        'charge time elapsed': 'Charge Time Elapsed',
        'select openevse.charge_time_elapsed entity':
            'Select openevse.charge_time_elapsed entity',
        'wifi signal': 'Wifi Signal',
        'select openevse_wifi_signal_strength entity':
            'Select openevse_wifi_signal_strength entity',
        'limit active': 'Limit Active',
        'select openevse_limit_active entity':
            'Select openevse_limit_active entity',
        'vehicle range': 'Vehicle Range',
        'select openevse_vehicle_range entity':
            'Select openevse_vehicle_range entity',
        'battery level': 'Battery Level',
        'select openevse_vehicle_battery_level entity':
            'Select openevse_vehicle_battery_level entity',
        entity: 'Entity',
        name: 'Name',
        icon: 'Icon',
        warning: 'Warning',
        'edit optional entity': 'Edit Optional Entity',
        save: 'Save',
        integration_missing_or_outdated:
            'OpenEVSE integration not found or requires version {min_version} & higher.',
    },
    fr: {
        disabled: 'désactivé',
        sleeping: 'désactivé',
        active: 'activé',
        charging: 'en charge',
        'not connected': 'en attente',
        connected: 'connecté',
        error: 'erreur',
        power: 'puissance',
        current: 'courant',
        session: 'session',
        elapsed: 'écoulé',
        'charge rate': 'ampérage',
        required_entities: 'Entités requises',
        entity_auto_success:
            'Toutes les entités ont été trouvées automatiquement',
        entity_auto_fail:
            "certaines entités n'ont pas pu être détectées automatiquement",
        entity_auto_loading: "Chargement des entités de l'appareil",
        'additional entities': 'Entités supplémentaires',
        'new limit': 'Nouvelle Limite',
        'add charging limit': 'Ajouter une Limite de Charge',
        time: 'Temps',
        energy: 'Énergie',
        battery: 'Batterie',
        range: 'Autonomie',
        hours: 'Heures',
        minutes: 'Minutes',
        cancel: 'Annuler',
        'add limit': 'Ajouter Limite',
        'header title': "Titre d'en-tête",
        'display header': "Afficher l'en-tête",
        features: 'Fonctionnalités',
        'enable vehicle battery': 'Activer la batterie du véhicule',
        'enable vehicle range': "Activer l'autonomie du véhicule",
        'limits settings': 'Paramètres des limites',
        'maximum charge energy': 'Énergie de charge maximale (kWh)',
        'maximum vehicle range': 'Autonomie maximale du véhicule (miles|km)',
        'openevse device': 'Appareil OpenEVSE',
        'select your openevse device':
            'Sélectionnez votre appareil OpenEVSE pour remplir automatiquement toutes les entités',
        'override state': 'État de surcharge',
        'select openevse.override_state entity':
            "Sélectionnez l'entité openevse.override_state",
        'station status': 'État de la station',
        'select openevse.station_status entity':
            "Sélectionnez l'entité openevse.station_status",
        'current power usage': 'Consommation électrique actuelle',
        'select openevse.current_power_usage entity':
            "Sélectionnez l'entité openevse.current_power_usage",
        'charging current': 'Courant de charge',
        'select openevse.charging_current entity':
            "Sélectionnez l'entité openevse.charging_current",
        'vehicle connected': 'Véhicule connecté',
        'select openevse.vehicle_connected entity':
            "Sélectionnez l'entité openevse.vehicle_connected",
        'charging status': 'État de charge',
        'select openevse.charging_status entity':
            "Sélectionnez l'entité openevse.charging_status",
        'session energy': 'Énergie de session',
        'select openevse.usage_this_session entity':
            "Sélectionnez l'entité openevse.usage_this_session",
        'charge time elapsed': 'Temps de charge écoulé',
        'select openevse.charge_time_elapsed entity':
            "Sélectionnez l'entité openevse.charge_time_elapsed",
        'wifi signal': 'Signal Wifi',
        'select openevse_wifi_signal_strength entity':
            "Sélectionnez l'entité openevse_wifi_signal_strength",
        'limit active': 'Limite active',
        'select openevse_limit_active entity':
            "Sélectionnez l'entité openevse_limit_active",
        'vehicle range': 'Autonomie du véhicule',
        'select openevse_vehicle_range entity':
            "Sélectionnez l'entité openevse_vehicle_range",
        'battery level': 'Niveau de batterie',
        'select openevse_vehicle_battery_level entity':
            "Sélectionnez l'entité openevse_vehicle_battery_level",
        entity: 'Entité',
        name: 'Nom',
        icon: 'Icône',
        warning: 'Avertissement',
        'edit optional entity': "Modifier l'entité optionnelle",
        save: 'Enregistrer',
        integration_missing_or_outdated:
            'Intégration OpenEVSE non trouvée ou nécessite la version {min_version} ou supérieure.',
    },
    de: {
        disabled: 'deaktiviert',
        sleeping: 'deaktiviert',
        active: 'aktiv',
        charging: 'lädt',
        'not connected': 'bereit',
        connected: 'verbunden',
        error: 'fehler',
        power: 'leistung',
        current: 'stromstärke',
        session: 'sitzung',
        elapsed: 'verstrichene zeit',
        'charge rate': 'laderate',
        required_entities: 'Erforderliche Entitäten',
        entity_auto_success:
            'Alle erforderlichen Entitäten wurden automatisch gefunden',
        entity_auto_fail:
            'Einige Entitäten konnten nicht automatisch erkannt werden',
        entity_auto_loading: 'Geräteentitäten werden geladen',
        'additional entities': 'Zusätzliche Entitäten',
        'new limit': 'Neues Limit',
        'add charging limit': 'Ladelimit hinzufügen',
        time: 'Zeit',
        energy: 'Energie',
        battery: 'Batterie',
        range: 'Reichweite',
        hours: 'Stunden',
        minutes: 'Minuten',
        cancel: 'Abbrechen',
        'add limit': 'Limit hinzufügen',
        'header title': 'Kopfzeilentitel',
        'display header': 'Kopfzeile anzeigen',
        features: 'Funktionen',
        'enable vehicle battery': 'Fahrzeugbatterie aktivieren',
        'enable vehicle range': 'Fahrzeugreichweite aktivieren',
        'limits settings': 'Limit-Einstellungen',
        'maximum charge energy': 'Maximale Ladeenergie (kWh)',
        'maximum vehicle range': 'Maximale Fahrzeugreichweite (Meilen|km)',
        'openevse device': 'OpenEVSE-Gerät',
        'select your openevse device':
            'Wählen Sie Ihr OpenEVSE-Gerät aus, um alle Entitäten automatisch zu füllen',
        'override state': 'Überschreibungsstatus',
        'select openevse.override_state entity':
            'Wählen Sie die openevse.override_state Entität',
        'station status': 'Stationsstatus',
        'select openevse.station_status entity':
            'Wählen Sie die openevse.station_status Entität',
        'current power usage': 'Aktuelle Leistungsaufnahme',
        'select openevse.current_power_usage entity':
            'Wählen Sie die openevse.current_power_usage Entität',
        'charging current': 'Ladestrom',
        'select openevse.charging_current entity':
            'Wählen Sie die openevse.charging_current Entität',
        'vehicle connected': 'Fahrzeug verbunden',
        'select openevse.vehicle_connected entity':
            'Wählen Sie die openevse.vehicle_connected Entität',
        'charging status': 'Ladestatus',
        'select openevse.charging_status entity':
            'Wählen Sie die openevse.charging_status Entität',
        'session energy': 'Sitzungsenergie',
        'select openevse.usage_this_session entity':
            'Wählen Sie die openevse.usage_this_session Entität',
        'charge time elapsed': 'Verstrichene Ladezeit',
        'select openevse.charge_time_elapsed entity':
            'Wählen Sie die openevse.charge_time_elapsed Entität',
        'wifi signal': 'WLAN-Signal',
        'select openevse_wifi_signal_strength entity':
            'Wählen Sie die openevse_wifi_signal_strength Entität',
        'limit active': 'Limit aktiv',
        'select openevse_limit_active entity':
            'Wählen Sie die openevse_limit_active Entität',
        'vehicle range': 'Fahrzeugreichweite',
        'select openevse_vehicle_range entity':
            'Wählen Sie die openevse_vehicle_range Entität',
        'battery level': 'Batteriestand',
        'select openevse_vehicle_battery_level entity':
            'Wählen Sie die openevse_vehicle_battery_level Entität',
        entity: 'Entität',
        name: 'Name',
        icon: 'Symbol',
        warning: 'Warnung',
        'edit optional entity': 'Optionale Entität bearbeiten',
        save: 'Speichern',
        integration_missing_or_outdated:
            'OpenEVSE-Integration nicht gefunden oder erfordert Version {min_version} oder höher.',
    },
    es: {
        disabled: 'desactivado',
        sleeping: 'desactivado',
        active: 'activo',
        charging: 'cargando',
        'not connected': 'en espera',
        connected: 'conectado',
        error: 'error',
        power: 'potencia',
        current: 'corriente',
        session: 'sesión',
        elapsed: 'pasado',
        'charge rate': 'amperaje',
        required_entities: 'Entidades requeridas',
        entity_auto_success:
            'Todas las entidades requeridas se encontraron automáticamente',
        entity_auto_fail:
            'Algunas entidades no pudieron ser detectadas automáticamente',
        entity_auto_loading: 'Cargando entidades del dispositivo',
        'additional entities': 'Entidades adicionales',
        'new limit': 'Nuevo Límite',
        'add charging limit': 'Añadir Límite de Carga',
        time: 'Tiempo',
        energy: 'Energía',
        battery: 'Batería',
        range: 'Autonomía',
        hours: 'Horas',
        minutes: 'Minutos',
        cancel: 'Cancelar',
        'add limit': 'Añadir Límite',
        'header title': 'Título del encabezado',
        'display header': 'Mostrar encabezado',
        features: 'Características',
        'enable vehicle battery': 'Habilitar batería del vehículo',
        'enable vehicle range': 'Habilitar autonomía del vehículo',
        'limits settings': 'Configuración de límites',
        'maximum charge energy': 'Energía máxima de carga (kWh)',
        'maximum vehicle range': 'Autonomía máxima del vehículo (millas|km)',
        'openevse device': 'Dispositivo OpenEVSE',
        'select your openevse device':
            'Seleccione su dispositivo OpenEVSE para completar automáticamente todas las entidades',
        'override state': 'Estado de anulación',
        'select openevse.override_state entity':
            'Seleccione la entidad openevse.override_state',
        'station status': 'Estado de la estación',
        'select openevse.station_status entity':
            'Seleccione la entidad openevse.station_status',
        'current power usage': 'Consumo de energía actual',
        'select openevse.current_power_usage entity':
            'Seleccione la entidad openevse.current_power_usage',
        'charging current': 'Corriente de carga',
        'select openevse.charging_current entity':
            'Seleccione la entidad openevse.charging_current',
        'vehicle connected': 'Vehículo conectado',
        'select openevse.vehicle_connected entity':
            'Seleccione la entidad openevse.vehicle_connected',
        'charging status': 'Estado de carga',
        'select openevse.charging_status entity':
            'Seleccione la entidad openevse.charging_status',
        'session energy': 'Energía de sesión',
        'select openevse.usage_this_session entity':
            'Seleccione la entidad openevse.usage_this_session',
        'charge time elapsed': 'Tiempo de carga transcurrido',
        'select openevse.charge_time_elapsed entity':
            'Seleccione la entidad openevse.charge_time_elapsed',
        'wifi signal': 'Señal Wifi',
        'select openevse_wifi_signal_strength entity':
            'Seleccione la entidad openevse_wifi_signal_strength',
        'limit active': 'Límite activo',
        'select openevse_limit_active entity':
            'Seleccione la entidad openevse_limit_active',
        'vehicle range': 'Autonomía del vehículo',
        'select openevse_vehicle_range entity':
            'Seleccione la entidad openevse_vehicle_range',
        'battery level': 'Nivel de batería',
        'select openevse_vehicle_battery_level entity':
            'Seleccione la entidad openevse_vehicle_battery_level',
        entity: 'Entidad',
        name: 'Nombre',
        icon: 'Icono',
        warning: 'Advertencia',
        'edit optional entity': 'Editar entidad opcional',
        save: 'Guardar',
        integration_missing_or_outdated:
            'Integración OpenEVSE no encontrada o requiere la versión {min_version} o superior.',
    },
};

export default translations;
