import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAd,
  faAddressBook,
  faAddressCard,
  faAdjust,
  faAirFreshener,
  faAlignCenter,
  faAlignJustify,
  faAlignLeft,
  faAlignRight,
  faAllergies,
  faAmbulance,
  faAmericanSignLanguageInterpreting,
  faAnchor,
  faAngleDoubleDown,
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faAngleDoubleUp,
  faAngleDown,
  faAngleLeft,
  faAngleRight,
  faAngleUp,
  faAngry,
  faAnkh,
  faAppleAlt,
  faArchive,
  faArchway,
  faArrowAltCircleDown,
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
  faArrowAltCircleUp,
  faArrowCircleDown,
  faArrowCircleLeft,
  faArrowCircleRight,
  faArrowCircleUp,
  faArrowDown,
  faArrowLeft,
  faArrowRight,
  faArrowUp,
  faArrowsAlt,
  faArrowsAltH,
  faArrowsAltV,
  faAssistiveListeningSystems,
  faAsterisk,
  faAt,
  faAtlas,
  faAtom,
  faAudioDescription,
  faAward,
  faBaby,
  faBabyCarriage,
  faBackspace,
  faBackward,
  faBacon,
  faBahai,
  faBalanceScale,
  faBalanceScaleLeft,
  faBalanceScaleRight,
  faBan,
  faBandAid,
  faBarcode,
  faBars,
  faBaseballBall,
  faBasketballBall,
  faBath,
  faBatteryEmpty,
  faBatteryFull,
  faBatteryHalf,
  faBatteryQuarter,
  faBatteryThreeQuarters,
  faBed,
  faBeer,
  faBell,
  faBellSlash,
  faBezierCurve,
  faBible,
  faBicycle,
  faBiking,
  faBinoculars,
  faBiohazard,
  faBirthdayCake,
  faBlender,
  faBlenderPhone,
  faBlind,
  faBlog,
  faBold,
  faBolt,
  faBomb,
  faBone,
  faBong,
  faBook,
  faBookDead,
  faBookMedical,
  faBookOpen,
  faBookReader,
  faBookmark,
  faBorderAll,
  faBorderNone,
  faBorderStyle,
  faBowlingBall,
  faBox,
  faBoxOpen,
  faBoxes,
  faBraille,
  faBrain,
  faBreadSlice,
  faBriefcase,
  faBriefcaseMedical,
  faBroadcastTower,
  faBroom,
  faBrush,
  faBug,
  faBuilding,
  faBullhorn,
  faBullseye,
  faBurn,
  faBus,
  faBusAlt,
  faBusinessTime,
  faCalculator,
  faCalendar,
  faCalendarAlt,
  faCalendarCheck,
  faCalendarDay,
  faCalendarMinus,
  faCalendarPlus,
  faCalendarTimes,
  faCalendarWeek,
  faCamera,
  faCameraRetro,
  faCampground,
  faCandyCane,
  faCannabis,
  faCapsules,
  faCar,
  faCarAlt,
  faCarBattery,
  faCarCrash,
  faCarSide,
  faCaravan,
  faCaretDown,
  faCaretLeft,
  faCaretRight,
  faCaretSquareDown,
  faCaretSquareLeft,
  faCaretSquareRight,
  faCaretSquareUp,
  faCaretUp,
  faCarrot,
  faCartArrowDown,
  faCartPlus,
  faCashRegister,
  faCat,
  faCertificate,
  faChair,
  faChalkboard,
  faChalkboardTeacher,
  faChargingStation,
  faChartArea,
  faChartBar,
  faChartLine,
  faChartPie,
  faCheck,
  faCheckCircle,
  faCheckDouble,
  faCheckSquare,
  faCheese,
  faChess,
  faChessBishop,
  faChessBoard,
  faChessKing,
  faChessKnight,
  faChessPawn,
  faChessQueen,
  faChessRook,
  faChevronCircleDown,
  faChevronCircleLeft,
  faChevronCircleRight,
  faChevronCircleUp,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faChevronUp,
  faChild,
  faChurch,
  faCircle,
  faCircleNotch,
  faCity,
  faClinicMedical,
  faClipboard,
  faClipboardCheck,
  faClipboardList,
  faClock,
  faClone,
  faClosedCaptioning,
  faCloud,
  faCloudDownloadAlt,
  faCloudMeatball,
  faCloudMoon,
  faCloudMoonRain,
  faCloudRain,
  faCloudShowersHeavy,
  faCloudSun,
  faCloudSunRain,
  faCloudUploadAlt,
  faCocktail,
  faCode,
  faCodeBranch,
  faCoffee,
  faCog,
  faCogs,
  faCoins,
  faColumns,
  faComment,
  faCommentAlt,
  faCommentDollar,
  faCommentDots,
  faCommentMedical,
  faCommentSlash,
  faComments,
  faCommentsDollar,
  faCompactDisc,
  faCompass,
  faCompress,
  faCompressAlt,
  faCompressArrowsAlt,
  faConciergeBell,
  faCookie,
  faCookieBite,
  faCopy,
  faCopyright,
  faCouch,
  faCreditCard,
  faCrop,
  faCropAlt,
  faCross,
  faCrosshairs,
  faCrow,
  faCrown,
  faCrutch,
  faCube,
  faCubes,
  faCut,
  faDatabase,
  faDeaf,
  faDemocrat,
  faDesktop,
  faDharmachakra,
  faDiagnoses,
  faDice,
  faDiceD20,
  faDiceD6,
  faDiceFive,
  faDiceFour,
  faDiceOne,
  faDiceSix,
  faDiceThree,
  faDiceTwo,
  faDigitalTachograph,
  faDirections,
  faDivide,
  faDizzy,
  faDna,
  faDog,
  faDollarSign,
  faDolly,
  faDollyFlatbed,
  faDonate,
  faDoorClosed,
  faDoorOpen,
  faDotCircle,
  faDove,
  faDownload,
  faDraftingCompass,
  faDragon,
  faDrawPolygon,
  faDrum,
  faDrumSteelpan,
  faDrumstickBite,
  faDumbbell,
  faDumpster,
  faDumpsterFire,
  faDungeon,
  faEdit,
  faEgg,
  faEject,
  faEllipsisH,
  faEllipsisV,
  faEnvelope,
  faEnvelopeOpen,
  faEnvelopeOpenText,
  faEnvelopeSquare,
  faEquals,
  faEraser,
  faEthernet,
  faEuroSign,
  faExchangeAlt,
  faExclamation,
  faExclamationCircle,
  faExclamationTriangle,
  faExpand,
  faExpandAlt,
  faExpandArrowsAlt,
  faExternalLinkAlt,
  faExternalLinkSquareAlt,
  faEye,
  faEyeDropper,
  faEyeSlash,
  faFan,
  faFastBackward,
  faFastForward,
  faFax,
  faFeather,
  faFeatherAlt,
  faFemale,
  faFighterJet,
  faFile,
  faFileAlt,
  faFileArchive,
  faFileAudio,
  faFileCode,
  faFileContract,
  faFileCsv,
  faFileDownload,
  faFileExcel,
  faFileExport,
  faFileImage,
  faFileImport,
  faFileInvoice,
  faFileInvoiceDollar,
  faFileMedical,
  faFileMedicalAlt,
  faFilePdf,
  faFilePowerpoint,
  faFilePrescription,
  faFileSignature,
  faFileUpload,
  faFileVideo,
  faFileWord,
  faFill,
  faFillDrip,
  faFilm,
  faFilter,
  faFingerprint,
  faFire,
  faFireAlt,
  faFireExtinguisher,
  faFirstAid,
  faFish,
  faFistRaised,
  faFlag,
  faFlagCheckered,
  faFlagUsa,
  faFlask,
  faFlushed,
  faFolder,
  faFolderMinus,
  faFolderOpen,
  faFolderPlus,
  faFont,
  faFootballBall,
  faForward,
  faFrog,
  faFrown,
  faFrownOpen,
  faFunnelDollar,
  faFutbol,
  faGamepad,
  faGasPump,
  faGavel,
  faGem,
  faGenderless,
  faGhost,
  faGift,
  faGifts,
  faGlassCheers,
  faGlassMartini,
  faGlassMartiniAlt,
  faGlassWhiskey,
  faGlasses,
  faGlobe,
  faGlobeAfrica,
  faGlobeAmericas,
  faGlobeAsia,
  faGlobeEurope,
  faGolfBall,
  faGopuram,
  faGraduationCap,
  faGreaterThan,
  faGreaterThanEqual,
  faGrimace,
  faGrin,
  faGrinAlt,
  faGrinBeam,
  faGrinBeamSweat,
  faGrinHearts,
  faGrinSquint,
  faGrinSquintTears,
  faGrinStars,
  faGrinTears,
  faGrinTongue,
  faGrinTongueSquint,
  faGrinTongueWink,
  faGrinWink,
  faGripHorizontal,
  faGripLines,
  faGripLinesVertical,
  faGripVertical,
  faGuitar,
  faHSquare,
  faHamburger,
  faHammer,
  faHamsa,
  faHandHolding,
  faHandHoldingHeart,
  faHandHoldingUsd,
  faHandLizard,
  faHandMiddleFinger,
  faHandPaper,
  faHandPeace,
  faHandPointDown,
  faHandPointLeft,
  faHandPointRight,
  faHandPointUp,
  faHandPointer,
  faHandRock,
  faHandScissors,
  faHandSpock,
  faHands,
  faHandsHelping,
  faHandshake,
  faHanukiah,
  faHardHat,
  faHashtag,
  faHatCowboy,
  faHatCowboySide,
  faHatWizard,
  faHdd,
  faHeading,
  faHeadphones,
  faHeadphonesAlt,
  faHeadset,
  faHeart,
  faHeartBroken,
  faHeartbeat,
  faHelicopter,
  faHighlighter,
  faHiking,
  faHippo,
  faHistory,
  faHockeyPuck,
  faHollyBerry,
  faHome,
  faHorse,
  faHorseHead,
  faHospital,
  faHospitalAlt,
  faHospitalSymbol,
  faHotTub,
  faHotdog,
  faHotel,
  faHourglass,
  faHourglassEnd,
  faHourglassHalf,
  faHourglassStart,
  faHouseDamage,
  faHryvnia,
  faICursor,
  faIceCream,
  faIcicles,
  faIcons,
  faIdBadge,
  faIdCard,
  faIdCardAlt,
  faIgloo,
  faImage,
  faImages,
  faInbox,
  faIndent,
  faIndustry,
  faInfinity,
  faInfo,
  faInfoCircle,
  faItalic,
  faJedi,
  faJoint,
  faJournalWhills,
  faKaaba,
  faKey,
  faKeyboard,
  faKhanda,
  faKiss,
  faKissBeam,
  faKissWinkHeart,
  faKiwiBird,
  faLandmark,
  faLanguage,
  faLaptop,
  faLaptopCode,
  faLaptopMedical,
  faLaugh,
  faLaughBeam,
  faLaughSquint,
  faLaughWink,
  faLayerGroup,
  faLeaf,
  faLemon,
  faLessThan,
  faLessThanEqual,
  faLevelDownAlt,
  faLevelUpAlt,
  faLifeRing,
  faLightbulb,
  faLink,
  faLiraSign,
  faList,
  faListAlt,
  faListOl,
  faListUl,
  faLocationArrow,
  faLock,
  faLockOpen,
  faLongArrowAltDown,
  faLongArrowAltLeft,
  faLongArrowAltRight,
  faLongArrowAltUp,
  faLowVision,
  faLuggageCart,
  faMagic,
  faMagnet,
  faMailBulk,
  faMale,
  faMap,
  faMapMarked,
  faMapMarkedAlt,
  faMapMarker,
  faMapMarkerAlt,
  faMapPin,
  faMapSigns,
  faMarker,
  faMars,
  faMarsDouble,
  faMarsStroke,
  faMarsStrokeH,
  faMarsStrokeV,
  faMask,
  faMedal,
  faMedkit,
  faMeh,
  faMehBlank,
  faMehRollingEyes,
  faMemory,
  faMenorah,
  faMercury,
  faMeteor,
  faMicrochip,
  faMicrophone,
  faMicrophoneAlt,
  faMicrophoneAltSlash,
  faMicrophoneSlash,
  faMicroscope,
  faMinus,
  faMinusCircle,
  faMinusSquare,
  faMitten,
  faMobile,
  faMobileAlt,
  faMoneyBill,
  faMoneyBillAlt,
  faMoneyBillWave,
  faMoneyBillWaveAlt,
  faMoneyCheck,
  faMoneyCheckAlt,
  faMonument,
  faMoon,
  faMortarPestle,
  faMosque,
  faMotorcycle,
  faMountain,
  faMouse,
  faMousePointer,
  faMugHot,
  faMusic,
  faNetworkWired,
  faNeuter,
  faNewspaper,
  faNotEqual,
  faNotesMedical,
  faObjectGroup,
  faObjectUngroup,
  faOilCan,
  faOm,
  faOtter,
  faOutdent,
  faPager,
  faPaintBrush,
  faPaintRoller,
  faPalette,
  faPallet,
  faPaperPlane,
  faPaperclip,
  faParachuteBox,
  faParagraph,
  faParking,
  faPassport,
  faPastafarianism,
  faPaste,
  faPause,
  faPauseCircle,
  faPaw,
  faPeace,
  faPen,
  faPenAlt,
  faPenFancy,
  faPenNib,
  faPenSquare,
  faPencilAlt,
  faPencilRuler,
  faPeopleCarry,
  faPepperHot,
  faPercent,
  faPercentage,
  faPersonBooth,
  faPhone,
  faPhoneAlt,
  faPhoneSlash,
  faPhoneSquare,
  faPhoneSquareAlt,
  faPhoneVolume,
  faPhotoVideo,
  faPiggyBank,
  faPills,
  faPizzaSlice,
  faPlaceOfWorship,
  faPlane,
  faPlaneArrival,
  faPlaneDeparture,
  faPlay,
  faPlayCircle,
  faPlug,
  faPlus,
  faPlusCircle,
  faPlusSquare,
  faPodcast,
  faPoll,
  faPollH,
  faPoo,
  faPooStorm,
  faPoop,
  faPortrait,
  faPoundSign,
  faPowerOff,
  faPray,
  faPrayingHands,
  faPrescription,
  faPrescriptionBottle,
  faPrescriptionBottleAlt,
  faPrint,
  faProcedures,
  faProjectDiagram,
  faPuzzlePiece,
  faQrcode,
  faQuestion,
  faQuestionCircle,
  faQuidditch,
  faQuoteLeft,
  faQuoteRight,
  faQuran,
  faRadiation,
  faRadiationAlt,
  faRainbow,
  faRandom,
  faReceipt,
  faRecordVinyl,
  faRecycle,
  faRedo,
  faRedoAlt,
  faRegistered,
  faRemoveFormat,
  faReply,
  faReplyAll,
  faRepublican,
  faRestroom,
  faRetweet,
  faRibbon,
  faRing,
  faRoad,
  faRobot,
  faRocket,
  faRoute,
  faRss,
  faRssSquare,
  faRubleSign,
  faRuler,
  faRulerCombined,
  faRulerHorizontal,
  faRulerVertical,
  faRunning,
  faRupeeSign,
  faSadCry,
  faSadTear,
  faSatellite,
  faSatelliteDish,
  faSave,
  faSchool,
  faScrewdriver,
  faScroll,
  faSdCard,
  faSearch,
  faSearchDollar,
  faSearchLocation,
  faSearchMinus,
  faSearchPlus,
  faSeedling,
  faServer,
  faShapes,
  faShare,
  faShareAlt,
  faShareAltSquare,
  faShareSquare,
  faShekelSign,
  faShieldAlt,
  faShip,
  faShippingFast,
  faShoePrints,
  faShoppingBag,
  faShoppingBasket,
  faShoppingCart,
  faShower,
  faShuttleVan,
  faSign,
  faSignInAlt,
  faSignLanguage,
  faSignOutAlt,
  faSignal,
  faSignature,
  faSimCard,
  faSitemap,
  faSkating,
  faSkiing,
  faSkiingNordic,
  faSkull,
  faSkullCrossbones,
  faSlash,
  faSleigh,
  faSlidersH,
  faSmile,
  faSmileBeam,
  faSmileWink,
  faSmog,
  faSmoking,
  faSmokingBan,
  faSms,
  faSnowboarding,
  faSnowflake,
  faSnowman,
  faSnowplow,
  faSocks,
  faSolarPanel,
  faSort,
  faSortAlphaDown,
  faSortAlphaDownAlt,
  faSortAlphaUp,
  faSortAlphaUpAlt,
  faSortAmountDown,
  faSortAmountDownAlt,
  faSortAmountUp,
  faSortAmountUpAlt,
  faSortDown,
  faSortNumericDown,
  faSortNumericDownAlt,
  faSortNumericUp,
  faSortNumericUpAlt,
  faSortUp,
  faSpa,
  faSpaceShuttle,
  faSpellCheck,
  faSpider,
  faSpinner,
  faSplotch,
  faSprayCan,
  faSquare,
  faSquareFull,
  faSquareRootAlt,
  faStamp,
  faStar,
  faStarAndCrescent,
  faStarHalf,
  faStarHalfAlt,
  faStarOfDavid,
  faStarOfLife,
  faStepBackward,
  faStepForward,
  faStethoscope,
  faStickyNote,
  faStop,
  faStopCircle,
  faStopwatch,
  faStore,
  faStoreAlt,
  faStream,
  faStreetView,
  faStrikethrough,
  faStroopwafel,
  faSubscript,
  faSubway,
  faSuitcase,
  faSuitcaseRolling,
  faSun,
  faSuperscript,
  faSurprise,
  faSwatchbook,
  faSwimmer,
  faSwimmingPool,
  faSynagogue,
  faSync,
  faSyncAlt,
  faSyringe,
  faTable,
  faTableTennis,
  faTablet,
  faTabletAlt,
  faTablets,
  faTachometerAlt,
  faTag,
  faTags,
  faTape,
  faTasks,
  faTaxi,
  faTeeth,
  faTeethOpen,
  faTemperatureHigh,
  faTemperatureLow,
  faTenge,
  faTerminal,
  faTextHeight,
  faTextWidth,
  faTh,
  faThLarge,
  faThList,
  faTheaterMasks,
  faThermometer,
  faThermometerEmpty,
  faThermometerFull,
  faThermometerHalf,
  faThermometerQuarter,
  faThermometerThreeQuarters,
  faThumbsDown,
  faThumbsUp,
  faThumbtack,
  faTicketAlt,
  faTimes,
  faTimesCircle,
  faTint,
  faTintSlash,
  faTired,
  faToggleOff,
  faToggleOn,
  faToilet,
  faToiletPaper,
  faToolbox,
  faTools,
  faTooth,
  faTorah,
  faToriiGate,
  faTractor,
  faTrademark,
  faTrafficLight,
  faTrailer,
  faTrain,
  faTram,
  faTransgender,
  faTransgenderAlt,
  faTrash,
  faTrashAlt,
  faTrashRestore,
  faTrashRestoreAlt,
  faTree,
  faTrophy,
  faTruck,
  faTruckLoading,
  faTruckMonster,
  faTruckMoving,
  faTruckPickup,
  faTshirt,
  faTty,
  faTv,
  faUmbrella,
  faUmbrellaBeach,
  faUnderline,
  faUndo,
  faUndoAlt,
  faUniversalAccess,
  faUniversity,
  faUnlink,
  faUnlock,
  faUnlockAlt,
  faUpload,
  faUser,
  faUserAlt,
  faUserAltSlash,
  faUserAstronaut,
  faUserCheck,
  faUserCircle,
  faUserClock,
  faUserCog,
  faUserEdit,
  faUserFriends,
  faUserGraduate,
  faUserInjured,
  faUserLock,
  faUserMd,
  faUserMinus,
  faUserNinja,
  faUserNurse,
  faUserPlus,
  faUserSecret,
  faUserShield,
  faUserSlash,
  faUserTag,
  faUserTie,
  faUserTimes,
  faUsers,
  faUsersCog,
  faUtensilSpoon,
  faUtensils,
  faVectorSquare,
  faVenus,
  faVenusDouble,
  faVenusMars,
  faVial,
  faVials,
  faVideo,
  faVideoSlash,
  faVihara,
  faVoicemail,
  faVolleyballBall,
  faVolumeDown,
  faVolumeMute,
  faVolumeOff,
  faVolumeUp,
  faVoteYea,
  faVrCardboard,
  faWalking,
  faWallet,
  faWarehouse,
  faWater,
  faWaveSquare,
  faWeight,
  faWeightHanging,
  faWheelchair,
  faWifi,
  faWind,
  faWindowClose,
  faWindowMaximize,
  faWindowMinimize,
  faWindowRestore,
  faWineBottle,
  faWineGlass,
  faWineGlassAlt,
  faWonSign,
  faWrench,
  faXRay,
  faYenSign,
  faYinYang,
} from '@fortawesome/free-solid-svg-icons';
import {
  fa500px,
  faAccessibleIcon,
  faAccusoft,
  faAcquisitionsIncorporated,
  faAdn,
  faAdobe,
  faAdversal,
  faAffiliatetheme,
  faAirbnb,
  faAlgolia,
  faAlipay,
  faAmazon,
  faAmazonPay,
  faAmilia,
  faAndroid,
  faAngellist,
  faAngrycreative,
  faAngular,
  faAppStore,
  faAppStoreIos,
  faApper,
  faApple,
  faApplePay,
  faArtstation,
  faAsymmetrik,
  faAtlassian,
  faAudible,
  faAutoprefixer,
  faAvianex,
  faAviato,
  faAws,
  faBandcamp,
  faBattleNet,
  faBehance,
  faBehanceSquare,
  faBimobject,
  faBitbucket,
  faBitcoin,
  faBity,
  faBlackTie,
  faBlackberry,
  faBlogger,
  faBloggerB,
  faBluetooth,
  faBluetoothB,
  faBootstrap,
  faBtc,
  faBuffer,
  faBuromobelexperte,
  faBuyNLarge,
  faBuysellads,
  faCanadianMapleLeaf,
  faCcAmazonPay,
  faCcAmex,
  faCcApplePay,
  faCcDinersClub,
  faCcDiscover,
  faCcJcb,
  faCcMastercard,
  faCcPaypal,
  faCcStripe,
  faCcVisa,
  faCentercode,
  faCentos,
  faChrome,
  faChromecast,
  faCloudscale,
  faCloudsmith,
  faCloudversify,
  faCodepen,
  faCodiepie,
  faConfluence,
  faConnectdevelop,
  faContao,
  faCottonBureau,
  faCpanel,
  faCreativeCommons,
  faCreativeCommonsBy,
  faCreativeCommonsNc,
  faCreativeCommonsNcEu,
  faCreativeCommonsNcJp,
  faCreativeCommonsNd,
  faCreativeCommonsPd,
  faCreativeCommonsPdAlt,
  faCreativeCommonsRemix,
  faCreativeCommonsSa,
  faCreativeCommonsSampling,
  faCreativeCommonsSamplingPlus,
  faCreativeCommonsShare,
  faCreativeCommonsZero,
  faCriticalRole,
  faCss3,
  faCss3Alt,
  faCuttlefish,
  faDAndD,
  faDAndDBeyond,
  faDailymotion,
  faDashcube,
  faDelicious,
  faDeploydog,
  faDeskpro,
  faDev,
  faDeviantart,
  faDhl,
  faDiaspora,
  faDigg,
  faDigitalOcean,
  faDiscord,
  faDiscourse,
  faDochub,
  faDocker,
  faDraft2digital,
  faDribbble,
  faDribbbleSquare,
  faDropbox,
  faDrupal,
  faDyalog,
  faEarlybirds,
  faEbay,
  faEdge,
  faElementor,
  faEllo,
  faEmber,
  faEmpire,
  faEnvira,
  faErlang,
  faEthereum,
  faEtsy,
  faEvernote,
  faExpeditedssl,
  faFacebook,
  faFacebookF,
  faFacebookMessenger,
  faFacebookSquare,
  faFantasyFlightGames,
  faFedex,
  faFedora,
  faFigma,
  faFirefox,
  faFirefoxBrowser,
  faFirstOrder,
  faFirstOrderAlt,
  faFirstdraft,
  faFlickr,
  faFlipboard,
  faFly,
  faFontAwesome,
  faFontAwesomeAlt,
  faFontAwesomeFlag,
  faFonticons,
  faFonticonsFi,
  faFortAwesome,
  faFortAwesomeAlt,
  faForumbee,
  faFoursquare,
  faFreeCodeCamp,
  faFreebsd,
  faFulcrum,
  faGalacticRepublic,
  faGalacticSenate,
  faGetPocket,
  faGg,
  faGgCircle,
  faGit,
  faGitAlt,
  faGitSquare,
  faGithub,
  faGithubAlt,
  faGithubSquare,
  faGitkraken,
  faGitlab,
  faGitter,
  faGlide,
  faGlideG,
  faGofore,
  faGoodreads,
  faGoodreadsG,
  faGoogle,
  faGoogleDrive,
  faGooglePlay,
  faGooglePlus,
  faGooglePlusG,
  faGooglePlusSquare,
  faGoogleWallet,
  faGratipay,
  faGrav,
  faGripfire,
  faGrunt,
  faGulp,
  faHackerNews,
  faHackerNewsSquare,
  faHackerrank,
  faHips,
  faHireAHelper,
  faHooli,
  faHornbill,
  faHotjar,
  faHouzz,
  faHtml5,
  faHubspot,
  faIdeal,
  faImdb,
  faInstagram,
  faInstagramSquare,
  faIntercom,
  faInternetExplorer,
  faInvision,
  faIoxhost,
  faItchIo,
  faItunes,
  faItunesNote,
  faJava,
  faJediOrder,
  faJenkins,
  faJira,
  faJoget,
  faJoomla,
  faJs,
  faJsSquare,
  faJsfiddle,
  faKaggle,
  faKeybase,
  faKeycdn,
  faKickstarter,
  faKickstarterK,
  faKorvue,
  faLaravel,
  faLastfm,
  faLastfmSquare,
  faLeanpub,
  faLess,
  faLine,
  faLinkedin,
  faLinkedinIn,
  faLinode,
  faLinux,
  faLyft,
  faMagento,
  faMailchimp,
  faMandalorian,
  faMarkdown,
  faMastodon,
  faMaxcdn,
  faMdb,
  faMedapps,
  faMedium,
  faMediumM,
  faMedrt,
  faMeetup,
  faMegaport,
  faMendeley,
  faMicroblog,
  faMicrosoft,
  faMix,
  faMixcloud,
  faMixer,
  faMizuni,
  faModx,
  faMonero,
  faNapster,
  faNeos,
  faNimblr,
  faNode,
  faNodeJs,
  faNpm,
  faNs8,
  faNutritionix,
  faOdnoklassniki,
  faOdnoklassnikiSquare,
  faOldRepublic,
  faOpencart,
  faOpenid,
  faOpera,
  faOptinMonster,
  faOrcid,
  faOsi,
  faPage4,
  faPagelines,
  faPalfed,
  faPatreon,
  faPaypal,
  faPennyArcade,
  faPeriscope,
  faPhabricator,
  faPhoenixFramework,
  faPhoenixSquadron,
  faPhp,
  faPiedPiper,
  faPiedPiperAlt,
  faPiedPiperHat,
  faPiedPiperPp,
  faPiedPiperSquare,
  faPinterest,
  faPinterestP,
  faPinterestSquare,
  faPlaystation,
  faProductHunt,
  faPushed,
  faPython,
  faQq,
  faQuinscape,
  faQuora,
  faRProject,
  faRaspberryPi,
  faRavelry,
  faReact,
  faReacteurope,
  faReadme,
  faRebel,
  faRedRiver,
  faReddit,
  faRedditAlien,
  faRedditSquare,
  faRedhat,
  faRenren,
  faReplyd,
  faResearchgate,
  faResolving,
  faRev,
  faRocketchat,
  faRockrms,
  faSafari,
  faSalesforce,
  faSass,
  faSchlix,
  faScribd,
  faSearchengin,
  faSellcast,
  faSellsy,
  faServicestack,
  faShirtsinbulk,
  faShopify,
  faShopware,
  faSimplybuilt,
  faSistrix,
  faSith,
  faSketch,
  faSkyatlas,
  faSkype,
  faSlack,
  faSlackHash,
  faSlideshare,
  faSnapchat,
  faSnapchatGhost,
  faSnapchatSquare,
  faSoundcloud,
  faSourcetree,
  faSpeakap,
  faSpeakerDeck,
  faSpotify,
  faSquarespace,
  faStackExchange,
  faStackOverflow,
  faStackpath,
  faStaylinked,
  faSteam,
  faSteamSquare,
  faSteamSymbol,
  faStickerMule,
  faStrava,
  faStripe,
  faStripeS,
  faStudiovinari,
  faStumbleupon,
  faStumbleuponCircle,
  faSuperpowers,
  faSupple,
  faSuse,
  faSwift,
  faSymfony,
  faTeamspeak,
  faTelegram,
  faTelegramPlane,
  faTencentWeibo,
  faTheRedYeti,
  faThemeco,
  faThemeisle,
  faThinkPeaks,
  faTradeFederation,
  faTrello,
  faTripadvisor,
  faTumblr,
  faTumblrSquare,
  faTwitch,
  faTwitter,
  faTwitterSquare,
  faTypo3,
  faUber,
  faUbuntu,
  faUikit,
  faUmbraco,
  faUniregistry,
  faUnity,
  faUntappd,
  faUps,
  faUsb,
  faUsps,
  faUssunnah,
  faVaadin,
  faViacoin,
  faViadeo,
  faViadeoSquare,
  faViber,
  faVimeo,
  faVimeoSquare,
  faVimeoV,
  faVine,
  faVk,
  faVnv,
  faVuejs,
  faWaze,
  faWeebly,
  faWeibo,
  faWeixin,
  faWhatsapp,
  faWhatsappSquare,
  faWhmcs,
  faWikipediaW,
  faWindows,
  faWix,
  faWizardsOfTheCoast,
  faWolfPackBattalion,
  faWordpress,
  faWordpressSimple,
  faWpbeginner,
  faWpexplorer,
  faWpforms,
  faWpressr,
  faXbox,
  faXing,
  faXingSquare,
  faYCombinator,
  faYahoo,
  faYammer,
  faYandex,
  faYandexInternational,
  faYarn,
  faYelp,
  faYoast,
  faYoutube,
  faYoutubeSquare,
  faZhihu,
} from '@fortawesome/free-brands-svg-icons';

export default function Icon({ icon }) {
  if (icon === 'Ad') {
    return <FontAwesomeIcon icon={faAd} />;
  }
  if (icon === 'AddressBook') {
    return <FontAwesomeIcon icon={faAddressBook} />;
  }
  if (icon === 'AddressCard') {
    return <FontAwesomeIcon icon={faAddressCard} />;
  }
  if (icon === 'Adjust') {
    return <FontAwesomeIcon icon={faAdjust} />;
  }
  if (icon === 'AirFreshener') {
    return <FontAwesomeIcon icon={faAirFreshener} />;
  }
  if (icon === 'AlignCenter') {
    return <FontAwesomeIcon icon={faAlignCenter} />;
  }
  if (icon === 'AlignJustify') {
    return <FontAwesomeIcon icon={faAlignJustify} />;
  }
  if (icon === 'AlignLeft') {
    return <FontAwesomeIcon icon={faAlignLeft} />;
  }
  if (icon === 'AlignRight') {
    return <FontAwesomeIcon icon={faAlignRight} />;
  }
  if (icon === 'Allergies') {
    return <FontAwesomeIcon icon={faAllergies} />;
  }
  if (icon === 'Ambulance') {
    return <FontAwesomeIcon icon={faAmbulance} />;
  }
  if (icon === 'AmericanSignLanguageInterpreting') {
    return <FontAwesomeIcon icon={faAmericanSignLanguageInterpreting} />;
  }
  if (icon === 'Anchor') {
    return <FontAwesomeIcon icon={faAnchor} />;
  }
  if (icon === 'AngleDoubleDown') {
    return <FontAwesomeIcon icon={faAngleDoubleDown} />;
  }
  if (icon === 'AngleDoubleLeft') {
    return <FontAwesomeIcon icon={faAngleDoubleLeft} />;
  }
  if (icon === 'AngleDoubleRight') {
    return <FontAwesomeIcon icon={faAngleDoubleRight} />;
  }
  if (icon === 'AngleDoubleUp') {
    return <FontAwesomeIcon icon={faAngleDoubleUp} />;
  }
  if (icon === 'AngleDown') {
    return <FontAwesomeIcon icon={faAngleDown} />;
  }
  if (icon === 'AngleLeft') {
    return <FontAwesomeIcon icon={faAngleLeft} />;
  }
  if (icon === 'AngleRight') {
    return <FontAwesomeIcon icon={faAngleRight} />;
  }
  if (icon === 'AngleUp') {
    return <FontAwesomeIcon icon={faAngleUp} />;
  }
  if (icon === 'Angry') {
    return <FontAwesomeIcon icon={faAngry} />;
  }
  if (icon === 'Ankh') {
    return <FontAwesomeIcon icon={faAnkh} />;
  }
  if (icon === 'AppleAlt') {
    return <FontAwesomeIcon icon={faAppleAlt} />;
  }
  if (icon === 'Archive') {
    return <FontAwesomeIcon icon={faArchive} />;
  }
  if (icon === 'Archway') {
    return <FontAwesomeIcon icon={faArchway} />;
  }
  if (icon === 'ArrowAltCircleDown') {
    return <FontAwesomeIcon icon={faArrowAltCircleDown} />;
  }
  if (icon === 'ArrowAltCircleLeft') {
    return <FontAwesomeIcon icon={faArrowAltCircleLeft} />;
  }
  if (icon === 'ArrowAltCircleRight') {
    return <FontAwesomeIcon icon={faArrowAltCircleRight} />;
  }
  if (icon === 'ArrowAltCircleUp') {
    return <FontAwesomeIcon icon={faArrowAltCircleUp} />;
  }
  if (icon === 'ArrowCircleDown') {
    return <FontAwesomeIcon icon={faArrowCircleDown} />;
  }
  if (icon === 'ArrowCircleLeft') {
    return <FontAwesomeIcon icon={faArrowCircleLeft} />;
  }
  if (icon === 'ArrowCircleRight') {
    return <FontAwesomeIcon icon={faArrowCircleRight} />;
  }
  if (icon === 'ArrowCircleUp') {
    return <FontAwesomeIcon icon={faArrowCircleUp} />;
  }
  if (icon === 'ArrowDown') {
    return <FontAwesomeIcon icon={faArrowDown} />;
  }
  if (icon === 'ArrowLeft') {
    return <FontAwesomeIcon icon={faArrowLeft} />;
  }
  if (icon === 'ArrowRight') {
    return <FontAwesomeIcon icon={faArrowRight} />;
  }
  if (icon === 'ArrowUp') {
    return <FontAwesomeIcon icon={faArrowUp} />;
  }
  if (icon === 'ArrowsAlt') {
    return <FontAwesomeIcon icon={faArrowsAlt} />;
  }
  if (icon === 'ArrowsAltH') {
    return <FontAwesomeIcon icon={faArrowsAltH} />;
  }
  if (icon === 'ArrowsAltV') {
    return <FontAwesomeIcon icon={faArrowsAltV} />;
  }
  if (icon === 'AssistiveListeningSystems') {
    return <FontAwesomeIcon icon={faAssistiveListeningSystems} />;
  }
  if (icon === 'Asterisk') {
    return <FontAwesomeIcon icon={faAsterisk} />;
  }
  if (icon === 'At') {
    return <FontAwesomeIcon icon={faAt} />;
  }
  if (icon === 'Atlas') {
    return <FontAwesomeIcon icon={faAtlas} />;
  }
  if (icon === 'Atom') {
    return <FontAwesomeIcon icon={faAtom} />;
  }
  if (icon === 'AudioDescription') {
    return <FontAwesomeIcon icon={faAudioDescription} />;
  }
  if (icon === 'Award') {
    return <FontAwesomeIcon icon={faAward} />;
  }
  if (icon === 'Baby') {
    return <FontAwesomeIcon icon={faBaby} />;
  }
  if (icon === 'BabyCarriage') {
    return <FontAwesomeIcon icon={faBabyCarriage} />;
  }
  if (icon === 'Backspace') {
    return <FontAwesomeIcon icon={faBackspace} />;
  }
  if (icon === 'Backward') {
    return <FontAwesomeIcon icon={faBackward} />;
  }
  if (icon === 'Bacon') {
    return <FontAwesomeIcon icon={faBacon} />;
  }
  if (icon === 'Bahai') {
    return <FontAwesomeIcon icon={faBahai} />;
  }
  if (icon === 'BalanceScale') {
    return <FontAwesomeIcon icon={faBalanceScale} />;
  }
  if (icon === 'BalanceScaleLeft') {
    return <FontAwesomeIcon icon={faBalanceScaleLeft} />;
  }
  if (icon === 'BalanceScaleRight') {
    return <FontAwesomeIcon icon={faBalanceScaleRight} />;
  }
  if (icon === 'Ban') {
    return <FontAwesomeIcon icon={faBan} />;
  }
  if (icon === 'BandAid') {
    return <FontAwesomeIcon icon={faBandAid} />;
  }
  if (icon === 'Barcode') {
    return <FontAwesomeIcon icon={faBarcode} />;
  }
  if (icon === 'Bars') {
    return <FontAwesomeIcon icon={faBars} />;
  }
  if (icon === 'BaseballBall') {
    return <FontAwesomeIcon icon={faBaseballBall} />;
  }
  if (icon === 'BasketballBall') {
    return <FontAwesomeIcon icon={faBasketballBall} />;
  }
  if (icon === 'Bath') {
    return <FontAwesomeIcon icon={faBath} />;
  }
  if (icon === 'BatteryEmpty') {
    return <FontAwesomeIcon icon={faBatteryEmpty} />;
  }
  if (icon === 'BatteryFull') {
    return <FontAwesomeIcon icon={faBatteryFull} />;
  }
  if (icon === 'BatteryHalf') {
    return <FontAwesomeIcon icon={faBatteryHalf} />;
  }
  if (icon === 'BatteryQuarter') {
    return <FontAwesomeIcon icon={faBatteryQuarter} />;
  }
  if (icon === 'BatteryThreeQuarters') {
    return <FontAwesomeIcon icon={faBatteryThreeQuarters} />;
  }
  if (icon === 'Bed') {
    return <FontAwesomeIcon icon={faBed} />;
  }
  if (icon === 'Beer') {
    return <FontAwesomeIcon icon={faBeer} />;
  }
  if (icon === 'Bell') {
    return <FontAwesomeIcon icon={faBell} />;
  }
  if (icon === 'BellSlash') {
    return <FontAwesomeIcon icon={faBellSlash} />;
  }
  if (icon === 'BezierCurve') {
    return <FontAwesomeIcon icon={faBezierCurve} />;
  }
  if (icon === 'Bible') {
    return <FontAwesomeIcon icon={faBible} />;
  }
  if (icon === 'Bicycle') {
    return <FontAwesomeIcon icon={faBicycle} />;
  }
  if (icon === 'Biking') {
    return <FontAwesomeIcon icon={faBiking} />;
  }
  if (icon === 'Binoculars') {
    return <FontAwesomeIcon icon={faBinoculars} />;
  }
  if (icon === 'Biohazard') {
    return <FontAwesomeIcon icon={faBiohazard} />;
  }
  if (icon === 'BirthdayCake') {
    return <FontAwesomeIcon icon={faBirthdayCake} />;
  }
  if (icon === 'Blender') {
    return <FontAwesomeIcon icon={faBlender} />;
  }
  if (icon === 'BlenderPhone') {
    return <FontAwesomeIcon icon={faBlenderPhone} />;
  }
  if (icon === 'Blind') {
    return <FontAwesomeIcon icon={faBlind} />;
  }
  if (icon === 'Blog') {
    return <FontAwesomeIcon icon={faBlog} />;
  }
  if (icon === 'Bold') {
    return <FontAwesomeIcon icon={faBold} />;
  }
  if (icon === 'Bolt') {
    return <FontAwesomeIcon icon={faBolt} />;
  }
  if (icon === 'Bomb') {
    return <FontAwesomeIcon icon={faBomb} />;
  }
  if (icon === 'Bone') {
    return <FontAwesomeIcon icon={faBone} />;
  }
  if (icon === 'Bong') {
    return <FontAwesomeIcon icon={faBong} />;
  }
  if (icon === 'Book') {
    return <FontAwesomeIcon icon={faBook} />;
  }
  if (icon === 'BookDead') {
    return <FontAwesomeIcon icon={faBookDead} />;
  }
  if (icon === 'BookMedical') {
    return <FontAwesomeIcon icon={faBookMedical} />;
  }
  if (icon === 'BookOpen') {
    return <FontAwesomeIcon icon={faBookOpen} />;
  }
  if (icon === 'BookReader') {
    return <FontAwesomeIcon icon={faBookReader} />;
  }
  if (icon === 'Bookmark') {
    return <FontAwesomeIcon icon={faBookmark} />;
  }
  if (icon === 'BorderAll') {
    return <FontAwesomeIcon icon={faBorderAll} />;
  }
  if (icon === 'BorderNone') {
    return <FontAwesomeIcon icon={faBorderNone} />;
  }
  if (icon === 'BorderStyle') {
    return <FontAwesomeIcon icon={faBorderStyle} />;
  }
  if (icon === 'BowlingBall') {
    return <FontAwesomeIcon icon={faBowlingBall} />;
  }
  if (icon === 'Box') {
    return <FontAwesomeIcon icon={faBox} />;
  }
  if (icon === 'BoxOpen') {
    return <FontAwesomeIcon icon={faBoxOpen} />;
  }
  if (icon === 'Boxes') {
    return <FontAwesomeIcon icon={faBoxes} />;
  }
  if (icon === 'Braille') {
    return <FontAwesomeIcon icon={faBraille} />;
  }
  if (icon === 'Brain') {
    return <FontAwesomeIcon icon={faBrain} />;
  }
  if (icon === 'BreadSlice') {
    return <FontAwesomeIcon icon={faBreadSlice} />;
  }
  if (icon === 'Briefcase') {
    return <FontAwesomeIcon icon={faBriefcase} />;
  }
  if (icon === 'BriefcaseMedical') {
    return <FontAwesomeIcon icon={faBriefcaseMedical} />;
  }
  if (icon === 'BroadcastTower') {
    return <FontAwesomeIcon icon={faBroadcastTower} />;
  }
  if (icon === 'Broom') {
    return <FontAwesomeIcon icon={faBroom} />;
  }
  if (icon === 'Brush') {
    return <FontAwesomeIcon icon={faBrush} />;
  }
  if (icon === 'Bug') {
    return <FontAwesomeIcon icon={faBug} />;
  }
  if (icon === 'Building') {
    return <FontAwesomeIcon icon={faBuilding} />;
  }
  if (icon === 'Bullhorn') {
    return <FontAwesomeIcon icon={faBullhorn} />;
  }
  if (icon === 'Bullseye') {
    return <FontAwesomeIcon icon={faBullseye} />;
  }
  if (icon === 'Burn') {
    return <FontAwesomeIcon icon={faBurn} />;
  }
  if (icon === 'Bus') {
    return <FontAwesomeIcon icon={faBus} />;
  }
  if (icon === 'BusAlt') {
    return <FontAwesomeIcon icon={faBusAlt} />;
  }
  if (icon === 'BusinessTime') {
    return <FontAwesomeIcon icon={faBusinessTime} />;
  }
  if (icon === 'Calculator') {
    return <FontAwesomeIcon icon={faCalculator} />;
  }
  if (icon === 'Calendar') {
    return <FontAwesomeIcon icon={faCalendar} />;
  }
  if (icon === 'CalendarAlt') {
    return <FontAwesomeIcon icon={faCalendarAlt} />;
  }
  if (icon === 'CalendarCheck') {
    return <FontAwesomeIcon icon={faCalendarCheck} />;
  }
  if (icon === 'CalendarDay') {
    return <FontAwesomeIcon icon={faCalendarDay} />;
  }
  if (icon === 'CalendarMinus') {
    return <FontAwesomeIcon icon={faCalendarMinus} />;
  }
  if (icon === 'CalendarPlus') {
    return <FontAwesomeIcon icon={faCalendarPlus} />;
  }
  if (icon === 'CalendarTimes') {
    return <FontAwesomeIcon icon={faCalendarTimes} />;
  }
  if (icon === 'CalendarWeek') {
    return <FontAwesomeIcon icon={faCalendarWeek} />;
  }
  if (icon === 'Camera') {
    return <FontAwesomeIcon icon={faCamera} />;
  }
  if (icon === 'CameraRetro') {
    return <FontAwesomeIcon icon={faCameraRetro} />;
  }
  if (icon === 'Campground') {
    return <FontAwesomeIcon icon={faCampground} />;
  }
  if (icon === 'CandyCane') {
    return <FontAwesomeIcon icon={faCandyCane} />;
  }
  if (icon === 'Cannabis') {
    return <FontAwesomeIcon icon={faCannabis} />;
  }
  if (icon === 'Capsules') {
    return <FontAwesomeIcon icon={faCapsules} />;
  }
  if (icon === 'Car') {
    return <FontAwesomeIcon icon={faCar} />;
  }
  if (icon === 'CarAlt') {
    return <FontAwesomeIcon icon={faCarAlt} />;
  }
  if (icon === 'CarBattery') {
    return <FontAwesomeIcon icon={faCarBattery} />;
  }
  if (icon === 'CarCrash') {
    return <FontAwesomeIcon icon={faCarCrash} />;
  }
  if (icon === 'CarSide') {
    return <FontAwesomeIcon icon={faCarSide} />;
  }
  if (icon === 'Caravan') {
    return <FontAwesomeIcon icon={faCaravan} />;
  }
  if (icon === 'CaretDown') {
    return <FontAwesomeIcon icon={faCaretDown} />;
  }
  if (icon === 'CaretLeft') {
    return <FontAwesomeIcon icon={faCaretLeft} />;
  }
  if (icon === 'CaretRight') {
    return <FontAwesomeIcon icon={faCaretRight} />;
  }
  if (icon === 'CaretSquareDown') {
    return <FontAwesomeIcon icon={faCaretSquareDown} />;
  }
  if (icon === 'CaretSquareLeft') {
    return <FontAwesomeIcon icon={faCaretSquareLeft} />;
  }
  if (icon === 'CaretSquareRight') {
    return <FontAwesomeIcon icon={faCaretSquareRight} />;
  }
  if (icon === 'CaretSquareUp') {
    return <FontAwesomeIcon icon={faCaretSquareUp} />;
  }
  if (icon === 'CaretUp') {
    return <FontAwesomeIcon icon={faCaretUp} />;
  }
  if (icon === 'Carrot') {
    return <FontAwesomeIcon icon={faCarrot} />;
  }
  if (icon === 'CartArrowDown') {
    return <FontAwesomeIcon icon={faCartArrowDown} />;
  }
  if (icon === 'CartPlus') {
    return <FontAwesomeIcon icon={faCartPlus} />;
  }
  if (icon === 'CashRegister') {
    return <FontAwesomeIcon icon={faCashRegister} />;
  }
  if (icon === 'Cat') {
    return <FontAwesomeIcon icon={faCat} />;
  }
  if (icon === 'Certificate') {
    return <FontAwesomeIcon icon={faCertificate} />;
  }
  if (icon === 'Chair') {
    return <FontAwesomeIcon icon={faChair} />;
  }
  if (icon === 'Chalkboard') {
    return <FontAwesomeIcon icon={faChalkboard} />;
  }
  if (icon === 'ChalkboardTeacher') {
    return <FontAwesomeIcon icon={faChalkboardTeacher} />;
  }
  if (icon === 'ChargingStation') {
    return <FontAwesomeIcon icon={faChargingStation} />;
  }
  if (icon === 'ChartArea') {
    return <FontAwesomeIcon icon={faChartArea} />;
  }
  if (icon === 'ChartBar') {
    return <FontAwesomeIcon icon={faChartBar} />;
  }
  if (icon === 'ChartLine') {
    return <FontAwesomeIcon icon={faChartLine} />;
  }
  if (icon === 'ChartPie') {
    return <FontAwesomeIcon icon={faChartPie} />;
  }
  if (icon === 'Check') {
    return <FontAwesomeIcon icon={faCheck} />;
  }
  if (icon === 'CheckCircle') {
    return <FontAwesomeIcon icon={faCheckCircle} />;
  }
  if (icon === 'CheckDouble') {
    return <FontAwesomeIcon icon={faCheckDouble} />;
  }
  if (icon === 'CheckSquare') {
    return <FontAwesomeIcon icon={faCheckSquare} />;
  }
  if (icon === 'Cheese') {
    return <FontAwesomeIcon icon={faCheese} />;
  }
  if (icon === 'Chess') {
    return <FontAwesomeIcon icon={faChess} />;
  }
  if (icon === 'ChessBishop') {
    return <FontAwesomeIcon icon={faChessBishop} />;
  }
  if (icon === 'ChessBoard') {
    return <FontAwesomeIcon icon={faChessBoard} />;
  }
  if (icon === 'ChessKing') {
    return <FontAwesomeIcon icon={faChessKing} />;
  }
  if (icon === 'ChessKnight') {
    return <FontAwesomeIcon icon={faChessKnight} />;
  }
  if (icon === 'ChessPawn') {
    return <FontAwesomeIcon icon={faChessPawn} />;
  }
  if (icon === 'ChessQueen') {
    return <FontAwesomeIcon icon={faChessQueen} />;
  }
  if (icon === 'ChessRook') {
    return <FontAwesomeIcon icon={faChessRook} />;
  }
  if (icon === 'ChevronCircleDown') {
    return <FontAwesomeIcon icon={faChevronCircleDown} />;
  }
  if (icon === 'ChevronCircleLeft') {
    return <FontAwesomeIcon icon={faChevronCircleLeft} />;
  }
  if (icon === 'ChevronCircleRight') {
    return <FontAwesomeIcon icon={faChevronCircleRight} />;
  }
  if (icon === 'ChevronCircleUp') {
    return <FontAwesomeIcon icon={faChevronCircleUp} />;
  }
  if (icon === 'ChevronDown') {
    return <FontAwesomeIcon icon={faChevronDown} />;
  }
  if (icon === 'ChevronLeft') {
    return <FontAwesomeIcon icon={faChevronLeft} />;
  }
  if (icon === 'ChevronRight') {
    return <FontAwesomeIcon icon={faChevronRight} />;
  }
  if (icon === 'ChevronUp') {
    return <FontAwesomeIcon icon={faChevronUp} />;
  }
  if (icon === 'Child') {
    return <FontAwesomeIcon icon={faChild} />;
  }
  if (icon === 'Church') {
    return <FontAwesomeIcon icon={faChurch} />;
  }
  if (icon === 'Circle') {
    return <FontAwesomeIcon icon={faCircle} />;
  }
  if (icon === 'CircleNotch') {
    return <FontAwesomeIcon icon={faCircleNotch} />;
  }
  if (icon === 'City') {
    return <FontAwesomeIcon icon={faCity} />;
  }
  if (icon === 'ClinicMedical') {
    return <FontAwesomeIcon icon={faClinicMedical} />;
  }
  if (icon === 'Clipboard') {
    return <FontAwesomeIcon icon={faClipboard} />;
  }
  if (icon === 'ClipboardCheck') {
    return <FontAwesomeIcon icon={faClipboardCheck} />;
  }
  if (icon === 'ClipboardList') {
    return <FontAwesomeIcon icon={faClipboardList} />;
  }
  if (icon === 'Clock') {
    return <FontAwesomeIcon icon={faClock} />;
  }
  if (icon === 'Clone') {
    return <FontAwesomeIcon icon={faClone} />;
  }
  if (icon === 'ClosedCaptioning') {
    return <FontAwesomeIcon icon={faClosedCaptioning} />;
  }
  if (icon === 'Cloud') {
    return <FontAwesomeIcon icon={faCloud} />;
  }
  if (icon === 'CloudDownloadAlt') {
    return <FontAwesomeIcon icon={faCloudDownloadAlt} />;
  }
  if (icon === 'CloudMeatball') {
    return <FontAwesomeIcon icon={faCloudMeatball} />;
  }
  if (icon === 'CloudMoon') {
    return <FontAwesomeIcon icon={faCloudMoon} />;
  }
  if (icon === 'CloudMoonRain') {
    return <FontAwesomeIcon icon={faCloudMoonRain} />;
  }
  if (icon === 'CloudRain') {
    return <FontAwesomeIcon icon={faCloudRain} />;
  }
  if (icon === 'CloudShowersHeavy') {
    return <FontAwesomeIcon icon={faCloudShowersHeavy} />;
  }
  if (icon === 'CloudSun') {
    return <FontAwesomeIcon icon={faCloudSun} />;
  }
  if (icon === 'CloudSunRain') {
    return <FontAwesomeIcon icon={faCloudSunRain} />;
  }
  if (icon === 'CloudUploadAlt') {
    return <FontAwesomeIcon icon={faCloudUploadAlt} />;
  }
  if (icon === 'Cocktail') {
    return <FontAwesomeIcon icon={faCocktail} />;
  }
  if (icon === 'Code') {
    return <FontAwesomeIcon icon={faCode} />;
  }
  if (icon === 'CodeBranch') {
    return <FontAwesomeIcon icon={faCodeBranch} />;
  }
  if (icon === 'Coffee') {
    return <FontAwesomeIcon icon={faCoffee} />;
  }
  if (icon === 'Cog') {
    return <FontAwesomeIcon icon={faCog} />;
  }
  if (icon === 'Cogs') {
    return <FontAwesomeIcon icon={faCogs} />;
  }
  if (icon === 'Coins') {
    return <FontAwesomeIcon icon={faCoins} />;
  }
  if (icon === 'Columns') {
    return <FontAwesomeIcon icon={faColumns} />;
  }
  if (icon === 'Comment') {
    return <FontAwesomeIcon icon={faComment} />;
  }
  if (icon === 'CommentAlt') {
    return <FontAwesomeIcon icon={faCommentAlt} />;
  }
  if (icon === 'CommentDollar') {
    return <FontAwesomeIcon icon={faCommentDollar} />;
  }
  if (icon === 'CommentDots') {
    return <FontAwesomeIcon icon={faCommentDots} />;
  }
  if (icon === 'CommentMedical') {
    return <FontAwesomeIcon icon={faCommentMedical} />;
  }
  if (icon === 'CommentSlash') {
    return <FontAwesomeIcon icon={faCommentSlash} />;
  }
  if (icon === 'Comments') {
    return <FontAwesomeIcon icon={faComments} />;
  }
  if (icon === 'CommentsDollar') {
    return <FontAwesomeIcon icon={faCommentsDollar} />;
  }
  if (icon === 'CompactDisc') {
    return <FontAwesomeIcon icon={faCompactDisc} />;
  }
  if (icon === 'Compass') {
    return <FontAwesomeIcon icon={faCompass} />;
  }
  if (icon === 'Compress') {
    return <FontAwesomeIcon icon={faCompress} />;
  }
  if (icon === 'CompressAlt') {
    return <FontAwesomeIcon icon={faCompressAlt} />;
  }
  if (icon === 'CompressArrowsAlt') {
    return <FontAwesomeIcon icon={faCompressArrowsAlt} />;
  }
  if (icon === 'ConciergeBell') {
    return <FontAwesomeIcon icon={faConciergeBell} />;
  }
  if (icon === 'Cookie') {
    return <FontAwesomeIcon icon={faCookie} />;
  }
  if (icon === 'CookieBite') {
    return <FontAwesomeIcon icon={faCookieBite} />;
  }
  if (icon === 'Copy') {
    return <FontAwesomeIcon icon={faCopy} />;
  }
  if (icon === 'Copyright') {
    return <FontAwesomeIcon icon={faCopyright} />;
  }
  if (icon === 'Couch') {
    return <FontAwesomeIcon icon={faCouch} />;
  }
  if (icon === 'CreditCard') {
    return <FontAwesomeIcon icon={faCreditCard} />;
  }
  if (icon === 'Crop') {
    return <FontAwesomeIcon icon={faCrop} />;
  }
  if (icon === 'CropAlt') {
    return <FontAwesomeIcon icon={faCropAlt} />;
  }
  if (icon === 'Cross') {
    return <FontAwesomeIcon icon={faCross} />;
  }
  if (icon === 'Crosshairs') {
    return <FontAwesomeIcon icon={faCrosshairs} />;
  }
  if (icon === 'Crow') {
    return <FontAwesomeIcon icon={faCrow} />;
  }
  if (icon === 'Crown') {
    return <FontAwesomeIcon icon={faCrown} />;
  }
  if (icon === 'Crutch') {
    return <FontAwesomeIcon icon={faCrutch} />;
  }
  if (icon === 'Cube') {
    return <FontAwesomeIcon icon={faCube} />;
  }
  if (icon === 'Cubes') {
    return <FontAwesomeIcon icon={faCubes} />;
  }
  if (icon === 'Cut') {
    return <FontAwesomeIcon icon={faCut} />;
  }
  if (icon === 'Database') {
    return <FontAwesomeIcon icon={faDatabase} />;
  }
  if (icon === 'Deaf') {
    return <FontAwesomeIcon icon={faDeaf} />;
  }
  if (icon === 'Democrat') {
    return <FontAwesomeIcon icon={faDemocrat} />;
  }
  if (icon === 'Desktop') {
    return <FontAwesomeIcon icon={faDesktop} />;
  }
  if (icon === 'Dharmachakra') {
    return <FontAwesomeIcon icon={faDharmachakra} />;
  }
  if (icon === 'Diagnoses') {
    return <FontAwesomeIcon icon={faDiagnoses} />;
  }
  if (icon === 'Dice') {
    return <FontAwesomeIcon icon={faDice} />;
  }
  if (icon === 'DiceD20') {
    return <FontAwesomeIcon icon={faDiceD20} />;
  }
  if (icon === 'DiceD6') {
    return <FontAwesomeIcon icon={faDiceD6} />;
  }
  if (icon === 'DiceFive') {
    return <FontAwesomeIcon icon={faDiceFive} />;
  }
  if (icon === 'DiceFour') {
    return <FontAwesomeIcon icon={faDiceFour} />;
  }
  if (icon === 'DiceOne') {
    return <FontAwesomeIcon icon={faDiceOne} />;
  }
  if (icon === 'DiceSix') {
    return <FontAwesomeIcon icon={faDiceSix} />;
  }
  if (icon === 'DiceThree') {
    return <FontAwesomeIcon icon={faDiceThree} />;
  }
  if (icon === 'DiceTwo') {
    return <FontAwesomeIcon icon={faDiceTwo} />;
  }
  if (icon === 'DigitalTachograph') {
    return <FontAwesomeIcon icon={faDigitalTachograph} />;
  }
  if (icon === 'Directions') {
    return <FontAwesomeIcon icon={faDirections} />;
  }
  if (icon === 'Divide') {
    return <FontAwesomeIcon icon={faDivide} />;
  }
  if (icon === 'Dizzy') {
    return <FontAwesomeIcon icon={faDizzy} />;
  }
  if (icon === 'Dna') {
    return <FontAwesomeIcon icon={faDna} />;
  }
  if (icon === 'Dog') {
    return <FontAwesomeIcon icon={faDog} />;
  }
  if (icon === 'DollarSign') {
    return <FontAwesomeIcon icon={faDollarSign} />;
  }
  if (icon === 'Dolly') {
    return <FontAwesomeIcon icon={faDolly} />;
  }
  if (icon === 'DollyFlatbed') {
    return <FontAwesomeIcon icon={faDollyFlatbed} />;
  }
  if (icon === 'Donate') {
    return <FontAwesomeIcon icon={faDonate} />;
  }
  if (icon === 'DoorClosed') {
    return <FontAwesomeIcon icon={faDoorClosed} />;
  }
  if (icon === 'DoorOpen') {
    return <FontAwesomeIcon icon={faDoorOpen} />;
  }
  if (icon === 'DotCircle') {
    return <FontAwesomeIcon icon={faDotCircle} />;
  }
  if (icon === 'Dove') {
    return <FontAwesomeIcon icon={faDove} />;
  }
  if (icon === 'Download') {
    return <FontAwesomeIcon icon={faDownload} />;
  }
  if (icon === 'DraftingCompass') {
    return <FontAwesomeIcon icon={faDraftingCompass} />;
  }
  if (icon === 'Dragon') {
    return <FontAwesomeIcon icon={faDragon} />;
  }
  if (icon === 'DrawPolygon') {
    return <FontAwesomeIcon icon={faDrawPolygon} />;
  }
  if (icon === 'Drum') {
    return <FontAwesomeIcon icon={faDrum} />;
  }
  if (icon === 'DrumSteelpan') {
    return <FontAwesomeIcon icon={faDrumSteelpan} />;
  }
  if (icon === 'DrumstickBite') {
    return <FontAwesomeIcon icon={faDrumstickBite} />;
  }
  if (icon === 'Dumbbell') {
    return <FontAwesomeIcon icon={faDumbbell} />;
  }
  if (icon === 'Dumpster') {
    return <FontAwesomeIcon icon={faDumpster} />;
  }
  if (icon === 'DumpsterFire') {
    return <FontAwesomeIcon icon={faDumpsterFire} />;
  }
  if (icon === 'Dungeon') {
    return <FontAwesomeIcon icon={faDungeon} />;
  }
  if (icon === 'Edit') {
    return <FontAwesomeIcon icon={faEdit} />;
  }
  if (icon === 'Egg') {
    return <FontAwesomeIcon icon={faEgg} />;
  }
  if (icon === 'Eject') {
    return <FontAwesomeIcon icon={faEject} />;
  }
  if (icon === 'EllipsisH') {
    return <FontAwesomeIcon icon={faEllipsisH} />;
  }
  if (icon === 'EllipsisV') {
    return <FontAwesomeIcon icon={faEllipsisV} />;
  }
  if (icon === 'Envelope') {
    return <FontAwesomeIcon icon={faEnvelope} />;
  }
  if (icon === 'EnvelopeOpen') {
    return <FontAwesomeIcon icon={faEnvelopeOpen} />;
  }
  if (icon === 'EnvelopeOpenText') {
    return <FontAwesomeIcon icon={faEnvelopeOpenText} />;
  }
  if (icon === 'EnvelopeSquare') {
    return <FontAwesomeIcon icon={faEnvelopeSquare} />;
  }
  if (icon === 'Equals') {
    return <FontAwesomeIcon icon={faEquals} />;
  }
  if (icon === 'Eraser') {
    return <FontAwesomeIcon icon={faEraser} />;
  }
  if (icon === 'Ethernet') {
    return <FontAwesomeIcon icon={faEthernet} />;
  }
  if (icon === 'EuroSign') {
    return <FontAwesomeIcon icon={faEuroSign} />;
  }
  if (icon === 'ExchangeAlt') {
    return <FontAwesomeIcon icon={faExchangeAlt} />;
  }
  if (icon === 'Exclamation') {
    return <FontAwesomeIcon icon={faExclamation} />;
  }
  if (icon === 'ExclamationCircle') {
    return <FontAwesomeIcon icon={faExclamationCircle} />;
  }
  if (icon === 'ExclamationTriangle') {
    return <FontAwesomeIcon icon={faExclamationTriangle} />;
  }
  if (icon === 'Expand') {
    return <FontAwesomeIcon icon={faExpand} />;
  }
  if (icon === 'ExpandAlt') {
    return <FontAwesomeIcon icon={faExpandAlt} />;
  }
  if (icon === 'ExpandArrowsAlt') {
    return <FontAwesomeIcon icon={faExpandArrowsAlt} />;
  }
  if (icon === 'ExternalLinkAlt') {
    return <FontAwesomeIcon icon={faExternalLinkAlt} />;
  }
  if (icon === 'ExternalLinkSquareAlt') {
    return <FontAwesomeIcon icon={faExternalLinkSquareAlt} />;
  }
  if (icon === 'Eye') {
    return <FontAwesomeIcon icon={faEye} />;
  }
  if (icon === 'EyeDropper') {
    return <FontAwesomeIcon icon={faEyeDropper} />;
  }
  if (icon === 'EyeSlash') {
    return <FontAwesomeIcon icon={faEyeSlash} />;
  }
  if (icon === 'Fan') {
    return <FontAwesomeIcon icon={faFan} />;
  }
  if (icon === 'FastBackward') {
    return <FontAwesomeIcon icon={faFastBackward} />;
  }
  if (icon === 'FastForward') {
    return <FontAwesomeIcon icon={faFastForward} />;
  }
  if (icon === 'Fax') {
    return <FontAwesomeIcon icon={faFax} />;
  }
  if (icon === 'Feather') {
    return <FontAwesomeIcon icon={faFeather} />;
  }
  if (icon === 'FeatherAlt') {
    return <FontAwesomeIcon icon={faFeatherAlt} />;
  }
  if (icon === 'Female') {
    return <FontAwesomeIcon icon={faFemale} />;
  }
  if (icon === 'FighterJet') {
    return <FontAwesomeIcon icon={faFighterJet} />;
  }
  if (icon === 'File') {
    return <FontAwesomeIcon icon={faFile} />;
  }
  if (icon === 'FileAlt') {
    return <FontAwesomeIcon icon={faFileAlt} />;
  }
  if (icon === 'FileArchive') {
    return <FontAwesomeIcon icon={faFileArchive} />;
  }
  if (icon === 'FileAudio') {
    return <FontAwesomeIcon icon={faFileAudio} />;
  }
  if (icon === 'FileCode') {
    return <FontAwesomeIcon icon={faFileCode} />;
  }
  if (icon === 'FileContract') {
    return <FontAwesomeIcon icon={faFileContract} />;
  }
  if (icon === 'FileCsv') {
    return <FontAwesomeIcon icon={faFileCsv} />;
  }
  if (icon === 'FileDownload') {
    return <FontAwesomeIcon icon={faFileDownload} />;
  }
  if (icon === 'FileExcel') {
    return <FontAwesomeIcon icon={faFileExcel} />;
  }
  if (icon === 'FileExport') {
    return <FontAwesomeIcon icon={faFileExport} />;
  }
  if (icon === 'FileImage') {
    return <FontAwesomeIcon icon={faFileImage} />;
  }
  if (icon === 'FileImport') {
    return <FontAwesomeIcon icon={faFileImport} />;
  }
  if (icon === 'FileInvoice') {
    return <FontAwesomeIcon icon={faFileInvoice} />;
  }
  if (icon === 'FileInvoiceDollar') {
    return <FontAwesomeIcon icon={faFileInvoiceDollar} />;
  }
  if (icon === 'FileMedical') {
    return <FontAwesomeIcon icon={faFileMedical} />;
  }
  if (icon === 'FileMedicalAlt') {
    return <FontAwesomeIcon icon={faFileMedicalAlt} />;
  }
  if (icon === 'FilePdf') {
    return <FontAwesomeIcon icon={faFilePdf} />;
  }
  if (icon === 'FilePowerpoint') {
    return <FontAwesomeIcon icon={faFilePowerpoint} />;
  }
  if (icon === 'FilePrescription') {
    return <FontAwesomeIcon icon={faFilePrescription} />;
  }
  if (icon === 'FileSignature') {
    return <FontAwesomeIcon icon={faFileSignature} />;
  }
  if (icon === 'FileUpload') {
    return <FontAwesomeIcon icon={faFileUpload} />;
  }
  if (icon === 'FileVideo') {
    return <FontAwesomeIcon icon={faFileVideo} />;
  }
  if (icon === 'FileWord') {
    return <FontAwesomeIcon icon={faFileWord} />;
  }
  if (icon === 'Fill') {
    return <FontAwesomeIcon icon={faFill} />;
  }
  if (icon === 'FillDrip') {
    return <FontAwesomeIcon icon={faFillDrip} />;
  }
  if (icon === 'Film') {
    return <FontAwesomeIcon icon={faFilm} />;
  }
  if (icon === 'Filter') {
    return <FontAwesomeIcon icon={faFilter} />;
  }
  if (icon === 'Fingerprint') {
    return <FontAwesomeIcon icon={faFingerprint} />;
  }
  if (icon === 'Fire') {
    return <FontAwesomeIcon icon={faFire} />;
  }
  if (icon === 'FireAlt') {
    return <FontAwesomeIcon icon={faFireAlt} />;
  }
  if (icon === 'FireExtinguisher') {
    return <FontAwesomeIcon icon={faFireExtinguisher} />;
  }
  if (icon === 'FirstAid') {
    return <FontAwesomeIcon icon={faFirstAid} />;
  }
  if (icon === 'Fish') {
    return <FontAwesomeIcon icon={faFish} />;
  }
  if (icon === 'FistRaised') {
    return <FontAwesomeIcon icon={faFistRaised} />;
  }
  if (icon === 'Flag') {
    return <FontAwesomeIcon icon={faFlag} />;
  }
  if (icon === 'FlagCheckered') {
    return <FontAwesomeIcon icon={faFlagCheckered} />;
  }
  if (icon === 'FlagUsa') {
    return <FontAwesomeIcon icon={faFlagUsa} />;
  }
  if (icon === 'Flask') {
    return <FontAwesomeIcon icon={faFlask} />;
  }
  if (icon === 'Flushed') {
    return <FontAwesomeIcon icon={faFlushed} />;
  }
  if (icon === 'Folder') {
    return <FontAwesomeIcon icon={faFolder} />;
  }
  if (icon === 'FolderMinus') {
    return <FontAwesomeIcon icon={faFolderMinus} />;
  }
  if (icon === 'FolderOpen') {
    return <FontAwesomeIcon icon={faFolderOpen} />;
  }
  if (icon === 'FolderPlus') {
    return <FontAwesomeIcon icon={faFolderPlus} />;
  }
  if (icon === 'Font') {
    return <FontAwesomeIcon icon={faFont} />;
  }
  if (icon === 'FootballBall') {
    return <FontAwesomeIcon icon={faFootballBall} />;
  }
  if (icon === 'Forward') {
    return <FontAwesomeIcon icon={faForward} />;
  }
  if (icon === 'Frog') {
    return <FontAwesomeIcon icon={faFrog} />;
  }
  if (icon === 'Frown') {
    return <FontAwesomeIcon icon={faFrown} />;
  }
  if (icon === 'FrownOpen') {
    return <FontAwesomeIcon icon={faFrownOpen} />;
  }
  if (icon === 'FunnelDollar') {
    return <FontAwesomeIcon icon={faFunnelDollar} />;
  }
  if (icon === 'Futbol') {
    return <FontAwesomeIcon icon={faFutbol} />;
  }
  if (icon === 'Gamepad') {
    return <FontAwesomeIcon icon={faGamepad} />;
  }
  if (icon === 'GasPump') {
    return <FontAwesomeIcon icon={faGasPump} />;
  }
  if (icon === 'Gavel') {
    return <FontAwesomeIcon icon={faGavel} />;
  }
  if (icon === 'Gem') {
    return <FontAwesomeIcon icon={faGem} />;
  }
  if (icon === 'Genderless') {
    return <FontAwesomeIcon icon={faGenderless} />;
  }
  if (icon === 'Ghost') {
    return <FontAwesomeIcon icon={faGhost} />;
  }
  if (icon === 'Gift') {
    return <FontAwesomeIcon icon={faGift} />;
  }
  if (icon === 'Gifts') {
    return <FontAwesomeIcon icon={faGifts} />;
  }
  if (icon === 'GlassCheers') {
    return <FontAwesomeIcon icon={faGlassCheers} />;
  }
  if (icon === 'GlassMartini') {
    return <FontAwesomeIcon icon={faGlassMartini} />;
  }
  if (icon === 'GlassMartiniAlt') {
    return <FontAwesomeIcon icon={faGlassMartiniAlt} />;
  }
  if (icon === 'GlassWhiskey') {
    return <FontAwesomeIcon icon={faGlassWhiskey} />;
  }
  if (icon === 'Glasses') {
    return <FontAwesomeIcon icon={faGlasses} />;
  }
  if (icon === 'Globe') {
    return <FontAwesomeIcon icon={faGlobe} />;
  }
  if (icon === 'GlobeAfrica') {
    return <FontAwesomeIcon icon={faGlobeAfrica} />;
  }
  if (icon === 'GlobeAmericas') {
    return <FontAwesomeIcon icon={faGlobeAmericas} />;
  }
  if (icon === 'GlobeAsia') {
    return <FontAwesomeIcon icon={faGlobeAsia} />;
  }
  if (icon === 'GlobeEurope') {
    return <FontAwesomeIcon icon={faGlobeEurope} />;
  }
  if (icon === 'GolfBall') {
    return <FontAwesomeIcon icon={faGolfBall} />;
  }
  if (icon === 'Gopuram') {
    return <FontAwesomeIcon icon={faGopuram} />;
  }
  if (icon === 'GraduationCap') {
    return <FontAwesomeIcon icon={faGraduationCap} />;
  }
  if (icon === 'GreaterThan') {
    return <FontAwesomeIcon icon={faGreaterThan} />;
  }
  if (icon === 'GreaterThanEqual') {
    return <FontAwesomeIcon icon={faGreaterThanEqual} />;
  }
  if (icon === 'Grimace') {
    return <FontAwesomeIcon icon={faGrimace} />;
  }
  if (icon === 'Grin') {
    return <FontAwesomeIcon icon={faGrin} />;
  }
  if (icon === 'GrinAlt') {
    return <FontAwesomeIcon icon={faGrinAlt} />;
  }
  if (icon === 'GrinBeam') {
    return <FontAwesomeIcon icon={faGrinBeam} />;
  }
  if (icon === 'GrinBeamSweat') {
    return <FontAwesomeIcon icon={faGrinBeamSweat} />;
  }
  if (icon === 'GrinHearts') {
    return <FontAwesomeIcon icon={faGrinHearts} />;
  }
  if (icon === 'GrinSquint') {
    return <FontAwesomeIcon icon={faGrinSquint} />;
  }
  if (icon === 'GrinSquintTears') {
    return <FontAwesomeIcon icon={faGrinSquintTears} />;
  }
  if (icon === 'GrinStars') {
    return <FontAwesomeIcon icon={faGrinStars} />;
  }
  if (icon === 'GrinTears') {
    return <FontAwesomeIcon icon={faGrinTears} />;
  }
  if (icon === 'GrinTongue') {
    return <FontAwesomeIcon icon={faGrinTongue} />;
  }
  if (icon === 'GrinTongueSquint') {
    return <FontAwesomeIcon icon={faGrinTongueSquint} />;
  }
  if (icon === 'GrinTongueWink') {
    return <FontAwesomeIcon icon={faGrinTongueWink} />;
  }
  if (icon === 'GrinWink') {
    return <FontAwesomeIcon icon={faGrinWink} />;
  }
  if (icon === 'GripHorizontal') {
    return <FontAwesomeIcon icon={faGripHorizontal} />;
  }
  if (icon === 'GripLines') {
    return <FontAwesomeIcon icon={faGripLines} />;
  }
  if (icon === 'GripLinesVertical') {
    return <FontAwesomeIcon icon={faGripLinesVertical} />;
  }
  if (icon === 'GripVertical') {
    return <FontAwesomeIcon icon={faGripVertical} />;
  }
  if (icon === 'Guitar') {
    return <FontAwesomeIcon icon={faGuitar} />;
  }
  if (icon === 'HSquare') {
    return <FontAwesomeIcon icon={faHSquare} />;
  }
  if (icon === 'Hamburger') {
    return <FontAwesomeIcon icon={faHamburger} />;
  }
  if (icon === 'Hammer') {
    return <FontAwesomeIcon icon={faHammer} />;
  }
  if (icon === 'Hamsa') {
    return <FontAwesomeIcon icon={faHamsa} />;
  }
  if (icon === 'HandHolding') {
    return <FontAwesomeIcon icon={faHandHolding} />;
  }
  if (icon === 'HandHoldingHeart') {
    return <FontAwesomeIcon icon={faHandHoldingHeart} />;
  }
  if (icon === 'HandHoldingUsd') {
    return <FontAwesomeIcon icon={faHandHoldingUsd} />;
  }
  if (icon === 'HandLizard') {
    return <FontAwesomeIcon icon={faHandLizard} />;
  }
  if (icon === 'HandMiddleFinger') {
    return <FontAwesomeIcon icon={faHandMiddleFinger} />;
  }
  if (icon === 'HandPaper') {
    return <FontAwesomeIcon icon={faHandPaper} />;
  }
  if (icon === 'HandPeace') {
    return <FontAwesomeIcon icon={faHandPeace} />;
  }
  if (icon === 'HandPointDown') {
    return <FontAwesomeIcon icon={faHandPointDown} />;
  }
  if (icon === 'HandPointLeft') {
    return <FontAwesomeIcon icon={faHandPointLeft} />;
  }
  if (icon === 'HandPointRight') {
    return <FontAwesomeIcon icon={faHandPointRight} />;
  }
  if (icon === 'HandPointUp') {
    return <FontAwesomeIcon icon={faHandPointUp} />;
  }
  if (icon === 'HandPointer') {
    return <FontAwesomeIcon icon={faHandPointer} />;
  }
  if (icon === 'HandRock') {
    return <FontAwesomeIcon icon={faHandRock} />;
  }
  if (icon === 'HandScissors') {
    return <FontAwesomeIcon icon={faHandScissors} />;
  }
  if (icon === 'HandSpock') {
    return <FontAwesomeIcon icon={faHandSpock} />;
  }
  if (icon === 'Hands') {
    return <FontAwesomeIcon icon={faHands} />;
  }
  if (icon === 'HandsHelping') {
    return <FontAwesomeIcon icon={faHandsHelping} />;
  }
  if (icon === 'Handshake') {
    return <FontAwesomeIcon icon={faHandshake} />;
  }
  if (icon === 'Hanukiah') {
    return <FontAwesomeIcon icon={faHanukiah} />;
  }
  if (icon === 'HardHat') {
    return <FontAwesomeIcon icon={faHardHat} />;
  }
  if (icon === 'Hashtag') {
    return <FontAwesomeIcon icon={faHashtag} />;
  }
  if (icon === 'HatCowboy') {
    return <FontAwesomeIcon icon={faHatCowboy} />;
  }
  if (icon === 'HatCowboySide') {
    return <FontAwesomeIcon icon={faHatCowboySide} />;
  }
  if (icon === 'HatWizard') {
    return <FontAwesomeIcon icon={faHatWizard} />;
  }
  if (icon === 'Hdd') {
    return <FontAwesomeIcon icon={faHdd} />;
  }
  if (icon === 'Heading') {
    return <FontAwesomeIcon icon={faHeading} />;
  }
  if (icon === 'Headphones') {
    return <FontAwesomeIcon icon={faHeadphones} />;
  }
  if (icon === 'HeadphonesAlt') {
    return <FontAwesomeIcon icon={faHeadphonesAlt} />;
  }
  if (icon === 'Headset') {
    return <FontAwesomeIcon icon={faHeadset} />;
  }
  if (icon === 'Heart') {
    return <FontAwesomeIcon icon={faHeart} />;
  }
  if (icon === 'HeartBroken') {
    return <FontAwesomeIcon icon={faHeartBroken} />;
  }
  if (icon === 'Heartbeat') {
    return <FontAwesomeIcon icon={faHeartbeat} />;
  }
  if (icon === 'Helicopter') {
    return <FontAwesomeIcon icon={faHelicopter} />;
  }
  if (icon === 'Highlighter') {
    return <FontAwesomeIcon icon={faHighlighter} />;
  }
  if (icon === 'Hiking') {
    return <FontAwesomeIcon icon={faHiking} />;
  }
  if (icon === 'Hippo') {
    return <FontAwesomeIcon icon={faHippo} />;
  }
  if (icon === 'History') {
    return <FontAwesomeIcon icon={faHistory} />;
  }
  if (icon === 'HockeyPuck') {
    return <FontAwesomeIcon icon={faHockeyPuck} />;
  }
  if (icon === 'HollyBerry') {
    return <FontAwesomeIcon icon={faHollyBerry} />;
  }
  if (icon === 'Home') {
    return <FontAwesomeIcon icon={faHome} />;
  }
  if (icon === 'Horse') {
    return <FontAwesomeIcon icon={faHorse} />;
  }
  if (icon === 'HorseHead') {
    return <FontAwesomeIcon icon={faHorseHead} />;
  }
  if (icon === 'Hospital') {
    return <FontAwesomeIcon icon={faHospital} />;
  }
  if (icon === 'HospitalAlt') {
    return <FontAwesomeIcon icon={faHospitalAlt} />;
  }
  if (icon === 'HospitalSymbol') {
    return <FontAwesomeIcon icon={faHospitalSymbol} />;
  }
  if (icon === 'HotTub') {
    return <FontAwesomeIcon icon={faHotTub} />;
  }
  if (icon === 'Hotdog') {
    return <FontAwesomeIcon icon={faHotdog} />;
  }
  if (icon === 'Hotel') {
    return <FontAwesomeIcon icon={faHotel} />;
  }
  if (icon === 'Hourglass') {
    return <FontAwesomeIcon icon={faHourglass} />;
  }
  if (icon === 'HourglassEnd') {
    return <FontAwesomeIcon icon={faHourglassEnd} />;
  }
  if (icon === 'HourglassHalf') {
    return <FontAwesomeIcon icon={faHourglassHalf} />;
  }
  if (icon === 'HourglassStart') {
    return <FontAwesomeIcon icon={faHourglassStart} />;
  }
  if (icon === 'HouseDamage') {
    return <FontAwesomeIcon icon={faHouseDamage} />;
  }
  if (icon === 'Hryvnia') {
    return <FontAwesomeIcon icon={faHryvnia} />;
  }
  if (icon === 'ICursor') {
    return <FontAwesomeIcon icon={faICursor} />;
  }
  if (icon === 'IceCream') {
    return <FontAwesomeIcon icon={faIceCream} />;
  }
  if (icon === 'Icicles') {
    return <FontAwesomeIcon icon={faIcicles} />;
  }
  if (icon === 'Icons') {
    return <FontAwesomeIcon icon={faIcons} />;
  }
  if (icon === 'IdBadge') {
    return <FontAwesomeIcon icon={faIdBadge} />;
  }
  if (icon === 'IdCard') {
    return <FontAwesomeIcon icon={faIdCard} />;
  }
  if (icon === 'IdCardAlt') {
    return <FontAwesomeIcon icon={faIdCardAlt} />;
  }
  if (icon === 'Igloo') {
    return <FontAwesomeIcon icon={faIgloo} />;
  }
  if (icon === 'Image') {
    return <FontAwesomeIcon icon={faImage} />;
  }
  if (icon === 'Images') {
    return <FontAwesomeIcon icon={faImages} />;
  }
  if (icon === 'Inbox') {
    return <FontAwesomeIcon icon={faInbox} />;
  }
  if (icon === 'Indent') {
    return <FontAwesomeIcon icon={faIndent} />;
  }
  if (icon === 'Industry') {
    return <FontAwesomeIcon icon={faIndustry} />;
  }
  if (icon === 'Infinity') {
    return <FontAwesomeIcon icon={faInfinity} />;
  }
  if (icon === 'Info') {
    return <FontAwesomeIcon icon={faInfo} />;
  }
  if (icon === 'InfoCircle') {
    return <FontAwesomeIcon icon={faInfoCircle} />;
  }
  if (icon === 'Italic') {
    return <FontAwesomeIcon icon={faItalic} />;
  }
  if (icon === 'Jedi') {
    return <FontAwesomeIcon icon={faJedi} />;
  }
  if (icon === 'Joint') {
    return <FontAwesomeIcon icon={faJoint} />;
  }
  if (icon === 'JournalWhills') {
    return <FontAwesomeIcon icon={faJournalWhills} />;
  }
  if (icon === 'Kaaba') {
    return <FontAwesomeIcon icon={faKaaba} />;
  }
  if (icon === 'Key') {
    return <FontAwesomeIcon icon={faKey} />;
  }
  if (icon === 'Keyboard') {
    return <FontAwesomeIcon icon={faKeyboard} />;
  }
  if (icon === 'Khanda') {
    return <FontAwesomeIcon icon={faKhanda} />;
  }
  if (icon === 'Kiss') {
    return <FontAwesomeIcon icon={faKiss} />;
  }
  if (icon === 'KissBeam') {
    return <FontAwesomeIcon icon={faKissBeam} />;
  }
  if (icon === 'KissWinkHeart') {
    return <FontAwesomeIcon icon={faKissWinkHeart} />;
  }
  if (icon === 'KiwiBird') {
    return <FontAwesomeIcon icon={faKiwiBird} />;
  }
  if (icon === 'Landmark') {
    return <FontAwesomeIcon icon={faLandmark} />;
  }
  if (icon === 'Language') {
    return <FontAwesomeIcon icon={faLanguage} />;
  }
  if (icon === 'Laptop') {
    return <FontAwesomeIcon icon={faLaptop} />;
  }
  if (icon === 'LaptopCode') {
    return <FontAwesomeIcon icon={faLaptopCode} />;
  }
  if (icon === 'LaptopMedical') {
    return <FontAwesomeIcon icon={faLaptopMedical} />;
  }
  if (icon === 'Laugh') {
    return <FontAwesomeIcon icon={faLaugh} />;
  }
  if (icon === 'LaughBeam') {
    return <FontAwesomeIcon icon={faLaughBeam} />;
  }
  if (icon === 'LaughSquint') {
    return <FontAwesomeIcon icon={faLaughSquint} />;
  }
  if (icon === 'LaughWink') {
    return <FontAwesomeIcon icon={faLaughWink} />;
  }
  if (icon === 'LayerGroup') {
    return <FontAwesomeIcon icon={faLayerGroup} />;
  }
  if (icon === 'Leaf') {
    return <FontAwesomeIcon icon={faLeaf} />;
  }
  if (icon === 'Lemon') {
    return <FontAwesomeIcon icon={faLemon} />;
  }
  if (icon === 'LessThan') {
    return <FontAwesomeIcon icon={faLessThan} />;
  }
  if (icon === 'LessThanEqual') {
    return <FontAwesomeIcon icon={faLessThanEqual} />;
  }
  if (icon === 'LevelDownAlt') {
    return <FontAwesomeIcon icon={faLevelDownAlt} />;
  }
  if (icon === 'LevelUpAlt') {
    return <FontAwesomeIcon icon={faLevelUpAlt} />;
  }
  if (icon === 'LifeRing') {
    return <FontAwesomeIcon icon={faLifeRing} />;
  }
  if (icon === 'Lightbulb') {
    return <FontAwesomeIcon icon={faLightbulb} />;
  }
  if (icon === 'Link') {
    return <FontAwesomeIcon icon={faLink} />;
  }
  if (icon === 'LiraSign') {
    return <FontAwesomeIcon icon={faLiraSign} />;
  }
  if (icon === 'List') {
    return <FontAwesomeIcon icon={faList} />;
  }
  if (icon === 'ListAlt') {
    return <FontAwesomeIcon icon={faListAlt} />;
  }
  if (icon === 'ListOl') {
    return <FontAwesomeIcon icon={faListOl} />;
  }
  if (icon === 'ListUl') {
    return <FontAwesomeIcon icon={faListUl} />;
  }
  if (icon === 'LocationArrow') {
    return <FontAwesomeIcon icon={faLocationArrow} />;
  }
  if (icon === 'Lock') {
    return <FontAwesomeIcon icon={faLock} />;
  }
  if (icon === 'LockOpen') {
    return <FontAwesomeIcon icon={faLockOpen} />;
  }
  if (icon === 'LongArrowAltDown') {
    return <FontAwesomeIcon icon={faLongArrowAltDown} />;
  }
  if (icon === 'LongArrowAltLeft') {
    return <FontAwesomeIcon icon={faLongArrowAltLeft} />;
  }
  if (icon === 'LongArrowAltRight') {
    return <FontAwesomeIcon icon={faLongArrowAltRight} />;
  }
  if (icon === 'LongArrowAltUp') {
    return <FontAwesomeIcon icon={faLongArrowAltUp} />;
  }
  if (icon === 'LowVision') {
    return <FontAwesomeIcon icon={faLowVision} />;
  }
  if (icon === 'LuggageCart') {
    return <FontAwesomeIcon icon={faLuggageCart} />;
  }
  if (icon === 'Magic') {
    return <FontAwesomeIcon icon={faMagic} />;
  }
  if (icon === 'Magnet') {
    return <FontAwesomeIcon icon={faMagnet} />;
  }
  if (icon === 'MailBulk') {
    return <FontAwesomeIcon icon={faMailBulk} />;
  }
  if (icon === 'Male') {
    return <FontAwesomeIcon icon={faMale} />;
  }
  if (icon === 'Map') {
    return <FontAwesomeIcon icon={faMap} />;
  }
  if (icon === 'MapMarked') {
    return <FontAwesomeIcon icon={faMapMarked} />;
  }
  if (icon === 'MapMarkedAlt') {
    return <FontAwesomeIcon icon={faMapMarkedAlt} />;
  }
  if (icon === 'MapMarker') {
    return <FontAwesomeIcon icon={faMapMarker} />;
  }
  if (icon === 'MapMarkerAlt') {
    return <FontAwesomeIcon icon={faMapMarkerAlt} />;
  }
  if (icon === 'MapPin') {
    return <FontAwesomeIcon icon={faMapPin} />;
  }
  if (icon === 'MapSigns') {
    return <FontAwesomeIcon icon={faMapSigns} />;
  }
  if (icon === 'Marker') {
    return <FontAwesomeIcon icon={faMarker} />;
  }
  if (icon === 'Mars') {
    return <FontAwesomeIcon icon={faMars} />;
  }
  if (icon === 'MarsDouble') {
    return <FontAwesomeIcon icon={faMarsDouble} />;
  }
  if (icon === 'MarsStroke') {
    return <FontAwesomeIcon icon={faMarsStroke} />;
  }
  if (icon === 'MarsStrokeH') {
    return <FontAwesomeIcon icon={faMarsStrokeH} />;
  }
  if (icon === 'MarsStrokeV') {
    return <FontAwesomeIcon icon={faMarsStrokeV} />;
  }
  if (icon === 'Mask') {
    return <FontAwesomeIcon icon={faMask} />;
  }
  if (icon === 'Medal') {
    return <FontAwesomeIcon icon={faMedal} />;
  }
  if (icon === 'Medkit') {
    return <FontAwesomeIcon icon={faMedkit} />;
  }
  if (icon === 'Meh') {
    return <FontAwesomeIcon icon={faMeh} />;
  }
  if (icon === 'MehBlank') {
    return <FontAwesomeIcon icon={faMehBlank} />;
  }
  if (icon === 'MehRollingEyes') {
    return <FontAwesomeIcon icon={faMehRollingEyes} />;
  }
  if (icon === 'Memory') {
    return <FontAwesomeIcon icon={faMemory} />;
  }
  if (icon === 'Menorah') {
    return <FontAwesomeIcon icon={faMenorah} />;
  }
  if (icon === 'Mercury') {
    return <FontAwesomeIcon icon={faMercury} />;
  }
  if (icon === 'Meteor') {
    return <FontAwesomeIcon icon={faMeteor} />;
  }
  if (icon === 'Microchip') {
    return <FontAwesomeIcon icon={faMicrochip} />;
  }
  if (icon === 'Microphone') {
    return <FontAwesomeIcon icon={faMicrophone} />;
  }
  if (icon === 'MicrophoneAlt') {
    return <FontAwesomeIcon icon={faMicrophoneAlt} />;
  }
  if (icon === 'MicrophoneAltSlash') {
    return <FontAwesomeIcon icon={faMicrophoneAltSlash} />;
  }
  if (icon === 'MicrophoneSlash') {
    return <FontAwesomeIcon icon={faMicrophoneSlash} />;
  }
  if (icon === 'Microscope') {
    return <FontAwesomeIcon icon={faMicroscope} />;
  }
  if (icon === 'Minus') {
    return <FontAwesomeIcon icon={faMinus} />;
  }
  if (icon === 'MinusCircle') {
    return <FontAwesomeIcon icon={faMinusCircle} />;
  }
  if (icon === 'MinusSquare') {
    return <FontAwesomeIcon icon={faMinusSquare} />;
  }
  if (icon === 'Mitten') {
    return <FontAwesomeIcon icon={faMitten} />;
  }
  if (icon === 'Mobile') {
    return <FontAwesomeIcon icon={faMobile} />;
  }
  if (icon === 'MobileAlt') {
    return <FontAwesomeIcon icon={faMobileAlt} />;
  }
  if (icon === 'MoneyBill') {
    return <FontAwesomeIcon icon={faMoneyBill} />;
  }
  if (icon === 'MoneyBillAlt') {
    return <FontAwesomeIcon icon={faMoneyBillAlt} />;
  }
  if (icon === 'MoneyBillWave') {
    return <FontAwesomeIcon icon={faMoneyBillWave} />;
  }
  if (icon === 'MoneyBillWaveAlt') {
    return <FontAwesomeIcon icon={faMoneyBillWaveAlt} />;
  }
  if (icon === 'MoneyCheck') {
    return <FontAwesomeIcon icon={faMoneyCheck} />;
  }
  if (icon === 'MoneyCheckAlt') {
    return <FontAwesomeIcon icon={faMoneyCheckAlt} />;
  }
  if (icon === 'Monument') {
    return <FontAwesomeIcon icon={faMonument} />;
  }
  if (icon === 'Moon') {
    return <FontAwesomeIcon icon={faMoon} />;
  }
  if (icon === 'MortarPestle') {
    return <FontAwesomeIcon icon={faMortarPestle} />;
  }
  if (icon === 'Mosque') {
    return <FontAwesomeIcon icon={faMosque} />;
  }
  if (icon === 'Motorcycle') {
    return <FontAwesomeIcon icon={faMotorcycle} />;
  }
  if (icon === 'Mountain') {
    return <FontAwesomeIcon icon={faMountain} />;
  }
  if (icon === 'Mouse') {
    return <FontAwesomeIcon icon={faMouse} />;
  }
  if (icon === 'MousePointer') {
    return <FontAwesomeIcon icon={faMousePointer} />;
  }
  if (icon === 'MugHot') {
    return <FontAwesomeIcon icon={faMugHot} />;
  }
  if (icon === 'Music') {
    return <FontAwesomeIcon icon={faMusic} />;
  }
  if (icon === 'NetworkWired') {
    return <FontAwesomeIcon icon={faNetworkWired} />;
  }
  if (icon === 'Neuter') {
    return <FontAwesomeIcon icon={faNeuter} />;
  }
  if (icon === 'Newspaper') {
    return <FontAwesomeIcon icon={faNewspaper} />;
  }
  if (icon === 'NotEqual') {
    return <FontAwesomeIcon icon={faNotEqual} />;
  }
  if (icon === 'NotesMedical') {
    return <FontAwesomeIcon icon={faNotesMedical} />;
  }
  if (icon === 'ObjectGroup') {
    return <FontAwesomeIcon icon={faObjectGroup} />;
  }
  if (icon === 'ObjectUngroup') {
    return <FontAwesomeIcon icon={faObjectUngroup} />;
  }
  if (icon === 'OilCan') {
    return <FontAwesomeIcon icon={faOilCan} />;
  }
  if (icon === 'Om') {
    return <FontAwesomeIcon icon={faOm} />;
  }
  if (icon === 'Otter') {
    return <FontAwesomeIcon icon={faOtter} />;
  }
  if (icon === 'Outdent') {
    return <FontAwesomeIcon icon={faOutdent} />;
  }
  if (icon === 'Pager') {
    return <FontAwesomeIcon icon={faPager} />;
  }
  if (icon === 'PaintBrush') {
    return <FontAwesomeIcon icon={faPaintBrush} />;
  }
  if (icon === 'PaintRoller') {
    return <FontAwesomeIcon icon={faPaintRoller} />;
  }
  if (icon === 'Palette') {
    return <FontAwesomeIcon icon={faPalette} />;
  }
  if (icon === 'Pallet') {
    return <FontAwesomeIcon icon={faPallet} />;
  }
  if (icon === 'PaperPlane') {
    return <FontAwesomeIcon icon={faPaperPlane} />;
  }
  if (icon === 'Paperclip') {
    return <FontAwesomeIcon icon={faPaperclip} />;
  }
  if (icon === 'ParachuteBox') {
    return <FontAwesomeIcon icon={faParachuteBox} />;
  }
  if (icon === 'Paragraph') {
    return <FontAwesomeIcon icon={faParagraph} />;
  }
  if (icon === 'Parking') {
    return <FontAwesomeIcon icon={faParking} />;
  }
  if (icon === 'Passport') {
    return <FontAwesomeIcon icon={faPassport} />;
  }
  if (icon === 'Pastafarianism') {
    return <FontAwesomeIcon icon={faPastafarianism} />;
  }
  if (icon === 'Paste') {
    return <FontAwesomeIcon icon={faPaste} />;
  }
  if (icon === 'Pause') {
    return <FontAwesomeIcon icon={faPause} />;
  }
  if (icon === 'PauseCircle') {
    return <FontAwesomeIcon icon={faPauseCircle} />;
  }
  if (icon === 'Paw') {
    return <FontAwesomeIcon icon={faPaw} />;
  }
  if (icon === 'Peace') {
    return <FontAwesomeIcon icon={faPeace} />;
  }
  if (icon === 'Pen') {
    return <FontAwesomeIcon icon={faPen} />;
  }
  if (icon === 'PenAlt') {
    return <FontAwesomeIcon icon={faPenAlt} />;
  }
  if (icon === 'PenFancy') {
    return <FontAwesomeIcon icon={faPenFancy} />;
  }
  if (icon === 'PenNib') {
    return <FontAwesomeIcon icon={faPenNib} />;
  }
  if (icon === 'PenSquare') {
    return <FontAwesomeIcon icon={faPenSquare} />;
  }
  if (icon === 'PencilAlt') {
    return <FontAwesomeIcon icon={faPencilAlt} />;
  }
  if (icon === 'PencilRuler') {
    return <FontAwesomeIcon icon={faPencilRuler} />;
  }
  if (icon === 'PeopleCarry') {
    return <FontAwesomeIcon icon={faPeopleCarry} />;
  }
  if (icon === 'PepperHot') {
    return <FontAwesomeIcon icon={faPepperHot} />;
  }
  if (icon === 'Percent') {
    return <FontAwesomeIcon icon={faPercent} />;
  }
  if (icon === 'Percentage') {
    return <FontAwesomeIcon icon={faPercentage} />;
  }
  if (icon === 'PersonBooth') {
    return <FontAwesomeIcon icon={faPersonBooth} />;
  }
  if (icon === 'Phone') {
    return <FontAwesomeIcon icon={faPhone} />;
  }
  if (icon === 'PhoneAlt') {
    return <FontAwesomeIcon icon={faPhoneAlt} />;
  }
  if (icon === 'PhoneSlash') {
    return <FontAwesomeIcon icon={faPhoneSlash} />;
  }
  if (icon === 'PhoneSquare') {
    return <FontAwesomeIcon icon={faPhoneSquare} />;
  }
  if (icon === 'PhoneSquareAlt') {
    return <FontAwesomeIcon icon={faPhoneSquareAlt} />;
  }
  if (icon === 'PhoneVolume') {
    return <FontAwesomeIcon icon={faPhoneVolume} />;
  }
  if (icon === 'PhotoVideo') {
    return <FontAwesomeIcon icon={faPhotoVideo} />;
  }
  if (icon === 'PiggyBank') {
    return <FontAwesomeIcon icon={faPiggyBank} />;
  }
  if (icon === 'Pills') {
    return <FontAwesomeIcon icon={faPills} />;
  }
  if (icon === 'PizzaSlice') {
    return <FontAwesomeIcon icon={faPizzaSlice} />;
  }
  if (icon === 'PlaceOfWorship') {
    return <FontAwesomeIcon icon={faPlaceOfWorship} />;
  }
  if (icon === 'Plane') {
    return <FontAwesomeIcon icon={faPlane} />;
  }
  if (icon === 'PlaneArrival') {
    return <FontAwesomeIcon icon={faPlaneArrival} />;
  }
  if (icon === 'PlaneDeparture') {
    return <FontAwesomeIcon icon={faPlaneDeparture} />;
  }
  if (icon === 'Play') {
    return <FontAwesomeIcon icon={faPlay} />;
  }
  if (icon === 'PlayCircle') {
    return <FontAwesomeIcon icon={faPlayCircle} />;
  }
  if (icon === 'Plug') {
    return <FontAwesomeIcon icon={faPlug} />;
  }
  if (icon === 'Plus') {
    return <FontAwesomeIcon icon={faPlus} />;
  }
  if (icon === 'PlusCircle') {
    return <FontAwesomeIcon icon={faPlusCircle} />;
  }
  if (icon === 'PlusSquare') {
    return <FontAwesomeIcon icon={faPlusSquare} />;
  }
  if (icon === 'Podcast') {
    return <FontAwesomeIcon icon={faPodcast} />;
  }
  if (icon === 'Poll') {
    return <FontAwesomeIcon icon={faPoll} />;
  }
  if (icon === 'PollH') {
    return <FontAwesomeIcon icon={faPollH} />;
  }
  if (icon === 'Poo') {
    return <FontAwesomeIcon icon={faPoo} />;
  }
  if (icon === 'PooStorm') {
    return <FontAwesomeIcon icon={faPooStorm} />;
  }
  if (icon === 'Poop') {
    return <FontAwesomeIcon icon={faPoop} />;
  }
  if (icon === 'Portrait') {
    return <FontAwesomeIcon icon={faPortrait} />;
  }
  if (icon === 'PoundSign') {
    return <FontAwesomeIcon icon={faPoundSign} />;
  }
  if (icon === 'PowerOff') {
    return <FontAwesomeIcon icon={faPowerOff} />;
  }
  if (icon === 'Pray') {
    return <FontAwesomeIcon icon={faPray} />;
  }
  if (icon === 'PrayingHands') {
    return <FontAwesomeIcon icon={faPrayingHands} />;
  }
  if (icon === 'Prescription') {
    return <FontAwesomeIcon icon={faPrescription} />;
  }
  if (icon === 'PrescriptionBottle') {
    return <FontAwesomeIcon icon={faPrescriptionBottle} />;
  }
  if (icon === 'PrescriptionBottleAlt') {
    return <FontAwesomeIcon icon={faPrescriptionBottleAlt} />;
  }
  if (icon === 'Print') {
    return <FontAwesomeIcon icon={faPrint} />;
  }
  if (icon === 'Procedures') {
    return <FontAwesomeIcon icon={faProcedures} />;
  }
  if (icon === 'ProjectDiagram') {
    return <FontAwesomeIcon icon={faProjectDiagram} />;
  }
  if (icon === 'PuzzlePiece') {
    return <FontAwesomeIcon icon={faPuzzlePiece} />;
  }
  if (icon === 'Qrcode') {
    return <FontAwesomeIcon icon={faQrcode} />;
  }
  if (icon === 'Question') {
    return <FontAwesomeIcon icon={faQuestion} />;
  }
  if (icon === 'QuestionCircle') {
    return <FontAwesomeIcon icon={faQuestionCircle} />;
  }
  if (icon === 'Quidditch') {
    return <FontAwesomeIcon icon={faQuidditch} />;
  }
  if (icon === 'QuoteLeft') {
    return <FontAwesomeIcon icon={faQuoteLeft} />;
  }
  if (icon === 'QuoteRight') {
    return <FontAwesomeIcon icon={faQuoteRight} />;
  }
  if (icon === 'Quran') {
    return <FontAwesomeIcon icon={faQuran} />;
  }
  if (icon === 'Radiation') {
    return <FontAwesomeIcon icon={faRadiation} />;
  }
  if (icon === 'RadiationAlt') {
    return <FontAwesomeIcon icon={faRadiationAlt} />;
  }
  if (icon === 'Rainbow') {
    return <FontAwesomeIcon icon={faRainbow} />;
  }
  if (icon === 'Random') {
    return <FontAwesomeIcon icon={faRandom} />;
  }
  if (icon === 'Receipt') {
    return <FontAwesomeIcon icon={faReceipt} />;
  }
  if (icon === 'RecordVinyl') {
    return <FontAwesomeIcon icon={faRecordVinyl} />;
  }
  if (icon === 'Recycle') {
    return <FontAwesomeIcon icon={faRecycle} />;
  }
  if (icon === 'Redo') {
    return <FontAwesomeIcon icon={faRedo} />;
  }
  if (icon === 'RedoAlt') {
    return <FontAwesomeIcon icon={faRedoAlt} />;
  }
  if (icon === 'Registered') {
    return <FontAwesomeIcon icon={faRegistered} />;
  }
  if (icon === 'RemoveFormat') {
    return <FontAwesomeIcon icon={faRemoveFormat} />;
  }
  if (icon === 'Reply') {
    return <FontAwesomeIcon icon={faReply} />;
  }
  if (icon === 'ReplyAll') {
    return <FontAwesomeIcon icon={faReplyAll} />;
  }
  if (icon === 'Republican') {
    return <FontAwesomeIcon icon={faRepublican} />;
  }
  if (icon === 'Restroom') {
    return <FontAwesomeIcon icon={faRestroom} />;
  }
  if (icon === 'Retweet') {
    return <FontAwesomeIcon icon={faRetweet} />;
  }
  if (icon === 'Ribbon') {
    return <FontAwesomeIcon icon={faRibbon} />;
  }
  if (icon === 'Ring') {
    return <FontAwesomeIcon icon={faRing} />;
  }
  if (icon === 'Road') {
    return <FontAwesomeIcon icon={faRoad} />;
  }
  if (icon === 'Robot') {
    return <FontAwesomeIcon icon={faRobot} />;
  }
  if (icon === 'Rocket') {
    return <FontAwesomeIcon icon={faRocket} />;
  }
  if (icon === 'Route') {
    return <FontAwesomeIcon icon={faRoute} />;
  }
  if (icon === 'Rss') {
    return <FontAwesomeIcon icon={faRss} />;
  }
  if (icon === 'RssSquare') {
    return <FontAwesomeIcon icon={faRssSquare} />;
  }
  if (icon === 'RubleSign') {
    return <FontAwesomeIcon icon={faRubleSign} />;
  }
  if (icon === 'Ruler') {
    return <FontAwesomeIcon icon={faRuler} />;
  }
  if (icon === 'RulerCombined') {
    return <FontAwesomeIcon icon={faRulerCombined} />;
  }
  if (icon === 'RulerHorizontal') {
    return <FontAwesomeIcon icon={faRulerHorizontal} />;
  }
  if (icon === 'RulerVertical') {
    return <FontAwesomeIcon icon={faRulerVertical} />;
  }
  if (icon === 'Running') {
    return <FontAwesomeIcon icon={faRunning} />;
  }
  if (icon === 'RupeeSign') {
    return <FontAwesomeIcon icon={faRupeeSign} />;
  }
  if (icon === 'SadCry') {
    return <FontAwesomeIcon icon={faSadCry} />;
  }
  if (icon === 'SadTear') {
    return <FontAwesomeIcon icon={faSadTear} />;
  }
  if (icon === 'Satellite') {
    return <FontAwesomeIcon icon={faSatellite} />;
  }
  if (icon === 'SatelliteDish') {
    return <FontAwesomeIcon icon={faSatelliteDish} />;
  }
  if (icon === 'Save') {
    return <FontAwesomeIcon icon={faSave} />;
  }
  if (icon === 'School') {
    return <FontAwesomeIcon icon={faSchool} />;
  }
  if (icon === 'Screwdriver') {
    return <FontAwesomeIcon icon={faScrewdriver} />;
  }
  if (icon === 'Scroll') {
    return <FontAwesomeIcon icon={faScroll} />;
  }
  if (icon === 'SdCard') {
    return <FontAwesomeIcon icon={faSdCard} />;
  }
  if (icon === 'Search') {
    return <FontAwesomeIcon icon={faSearch} />;
  }
  if (icon === 'SearchDollar') {
    return <FontAwesomeIcon icon={faSearchDollar} />;
  }
  if (icon === 'SearchLocation') {
    return <FontAwesomeIcon icon={faSearchLocation} />;
  }
  if (icon === 'SearchMinus') {
    return <FontAwesomeIcon icon={faSearchMinus} />;
  }
  if (icon === 'SearchPlus') {
    return <FontAwesomeIcon icon={faSearchPlus} />;
  }
  if (icon === 'Seedling') {
    return <FontAwesomeIcon icon={faSeedling} />;
  }
  if (icon === 'Server') {
    return <FontAwesomeIcon icon={faServer} />;
  }
  if (icon === 'Shapes') {
    return <FontAwesomeIcon icon={faShapes} />;
  }
  if (icon === 'Share') {
    return <FontAwesomeIcon icon={faShare} />;
  }
  if (icon === 'ShareAlt') {
    return <FontAwesomeIcon icon={faShareAlt} />;
  }
  if (icon === 'ShareAltSquare') {
    return <FontAwesomeIcon icon={faShareAltSquare} />;
  }
  if (icon === 'ShareSquare') {
    return <FontAwesomeIcon icon={faShareSquare} />;
  }
  if (icon === 'ShekelSign') {
    return <FontAwesomeIcon icon={faShekelSign} />;
  }
  if (icon === 'ShieldAlt') {
    return <FontAwesomeIcon icon={faShieldAlt} />;
  }
  if (icon === 'Ship') {
    return <FontAwesomeIcon icon={faShip} />;
  }
  if (icon === 'ShippingFast') {
    return <FontAwesomeIcon icon={faShippingFast} />;
  }
  if (icon === 'ShoePrints') {
    return <FontAwesomeIcon icon={faShoePrints} />;
  }
  if (icon === 'ShoppingBag') {
    return <FontAwesomeIcon icon={faShoppingBag} />;
  }
  if (icon === 'ShoppingBasket') {
    return <FontAwesomeIcon icon={faShoppingBasket} />;
  }
  if (icon === 'ShoppingCart') {
    return <FontAwesomeIcon icon={faShoppingCart} />;
  }
  if (icon === 'Shower') {
    return <FontAwesomeIcon icon={faShower} />;
  }
  if (icon === 'ShuttleVan') {
    return <FontAwesomeIcon icon={faShuttleVan} />;
  }
  if (icon === 'Sign') {
    return <FontAwesomeIcon icon={faSign} />;
  }
  if (icon === 'SignInAlt') {
    return <FontAwesomeIcon icon={faSignInAlt} />;
  }
  if (icon === 'SignLanguage') {
    return <FontAwesomeIcon icon={faSignLanguage} />;
  }
  if (icon === 'SignOutAlt') {
    return <FontAwesomeIcon icon={faSignOutAlt} />;
  }
  if (icon === 'Signal') {
    return <FontAwesomeIcon icon={faSignal} />;
  }
  if (icon === 'Signature') {
    return <FontAwesomeIcon icon={faSignature} />;
  }
  if (icon === 'SimCard') {
    return <FontAwesomeIcon icon={faSimCard} />;
  }
  if (icon === 'Sitemap') {
    return <FontAwesomeIcon icon={faSitemap} />;
  }
  if (icon === 'Skating') {
    return <FontAwesomeIcon icon={faSkating} />;
  }
  if (icon === 'Skiing') {
    return <FontAwesomeIcon icon={faSkiing} />;
  }
  if (icon === 'SkiingNordic') {
    return <FontAwesomeIcon icon={faSkiingNordic} />;
  }
  if (icon === 'Skull') {
    return <FontAwesomeIcon icon={faSkull} />;
  }
  if (icon === 'SkullCrossbones') {
    return <FontAwesomeIcon icon={faSkullCrossbones} />;
  }
  if (icon === 'Slash') {
    return <FontAwesomeIcon icon={faSlash} />;
  }
  if (icon === 'Sleigh') {
    return <FontAwesomeIcon icon={faSleigh} />;
  }
  if (icon === 'SlidersH') {
    return <FontAwesomeIcon icon={faSlidersH} />;
  }
  if (icon === 'Smile') {
    return <FontAwesomeIcon icon={faSmile} />;
  }
  if (icon === 'SmileBeam') {
    return <FontAwesomeIcon icon={faSmileBeam} />;
  }
  if (icon === 'SmileWink') {
    return <FontAwesomeIcon icon={faSmileWink} />;
  }
  if (icon === 'Smog') {
    return <FontAwesomeIcon icon={faSmog} />;
  }
  if (icon === 'Smoking') {
    return <FontAwesomeIcon icon={faSmoking} />;
  }
  if (icon === 'SmokingBan') {
    return <FontAwesomeIcon icon={faSmokingBan} />;
  }
  if (icon === 'Sms') {
    return <FontAwesomeIcon icon={faSms} />;
  }
  if (icon === 'Snowboarding') {
    return <FontAwesomeIcon icon={faSnowboarding} />;
  }
  if (icon === 'Snowflake') {
    return <FontAwesomeIcon icon={faSnowflake} />;
  }
  if (icon === 'Snowman') {
    return <FontAwesomeIcon icon={faSnowman} />;
  }
  if (icon === 'Snowplow') {
    return <FontAwesomeIcon icon={faSnowplow} />;
  }
  if (icon === 'Socks') {
    return <FontAwesomeIcon icon={faSocks} />;
  }
  if (icon === 'SolarPanel') {
    return <FontAwesomeIcon icon={faSolarPanel} />;
  }
  if (icon === 'Sort') {
    return <FontAwesomeIcon icon={faSort} />;
  }
  if (icon === 'SortAlphaDown') {
    return <FontAwesomeIcon icon={faSortAlphaDown} />;
  }
  if (icon === 'SortAlphaDownAlt') {
    return <FontAwesomeIcon icon={faSortAlphaDownAlt} />;
  }
  if (icon === 'SortAlphaUp') {
    return <FontAwesomeIcon icon={faSortAlphaUp} />;
  }
  if (icon === 'SortAlphaUpAlt') {
    return <FontAwesomeIcon icon={faSortAlphaUpAlt} />;
  }
  if (icon === 'SortAmountDown') {
    return <FontAwesomeIcon icon={faSortAmountDown} />;
  }
  if (icon === 'SortAmountDownAlt') {
    return <FontAwesomeIcon icon={faSortAmountDownAlt} />;
  }
  if (icon === 'SortAmountUp') {
    return <FontAwesomeIcon icon={faSortAmountUp} />;
  }
  if (icon === 'SortAmountUpAlt') {
    return <FontAwesomeIcon icon={faSortAmountUpAlt} />;
  }
  if (icon === 'SortDown') {
    return <FontAwesomeIcon icon={faSortDown} />;
  }
  if (icon === 'SortNumericDown') {
    return <FontAwesomeIcon icon={faSortNumericDown} />;
  }
  if (icon === 'SortNumericDownAlt') {
    return <FontAwesomeIcon icon={faSortNumericDownAlt} />;
  }
  if (icon === 'SortNumericUp') {
    return <FontAwesomeIcon icon={faSortNumericUp} />;
  }
  if (icon === 'SortNumericUpAlt') {
    return <FontAwesomeIcon icon={faSortNumericUpAlt} />;
  }
  if (icon === 'SortUp') {
    return <FontAwesomeIcon icon={faSortUp} />;
  }
  if (icon === 'Spa') {
    return <FontAwesomeIcon icon={faSpa} />;
  }
  if (icon === 'SpaceShuttle') {
    return <FontAwesomeIcon icon={faSpaceShuttle} />;
  }
  if (icon === 'SpellCheck') {
    return <FontAwesomeIcon icon={faSpellCheck} />;
  }
  if (icon === 'Spider') {
    return <FontAwesomeIcon icon={faSpider} />;
  }
  if (icon === 'Spinner') {
    return <FontAwesomeIcon icon={faSpinner} />;
  }
  if (icon === 'Splotch') {
    return <FontAwesomeIcon icon={faSplotch} />;
  }
  if (icon === 'SprayCan') {
    return <FontAwesomeIcon icon={faSprayCan} />;
  }
  if (icon === 'Square') {
    return <FontAwesomeIcon icon={faSquare} />;
  }
  if (icon === 'SquareFull') {
    return <FontAwesomeIcon icon={faSquareFull} />;
  }
  if (icon === 'SquareRootAlt') {
    return <FontAwesomeIcon icon={faSquareRootAlt} />;
  }
  if (icon === 'Stamp') {
    return <FontAwesomeIcon icon={faStamp} />;
  }
  if (icon === 'Star') {
    return <FontAwesomeIcon icon={faStar} />;
  }
  if (icon === 'StarAndCrescent') {
    return <FontAwesomeIcon icon={faStarAndCrescent} />;
  }
  if (icon === 'StarHalf') {
    return <FontAwesomeIcon icon={faStarHalf} />;
  }
  if (icon === 'StarHalfAlt') {
    return <FontAwesomeIcon icon={faStarHalfAlt} />;
  }
  if (icon === 'StarOfDavid') {
    return <FontAwesomeIcon icon={faStarOfDavid} />;
  }
  if (icon === 'StarOfLife') {
    return <FontAwesomeIcon icon={faStarOfLife} />;
  }
  if (icon === 'StepBackward') {
    return <FontAwesomeIcon icon={faStepBackward} />;
  }
  if (icon === 'StepForward') {
    return <FontAwesomeIcon icon={faStepForward} />;
  }
  if (icon === 'Stethoscope') {
    return <FontAwesomeIcon icon={faStethoscope} />;
  }
  if (icon === 'StickyNote') {
    return <FontAwesomeIcon icon={faStickyNote} />;
  }
  if (icon === 'Stop') {
    return <FontAwesomeIcon icon={faStop} />;
  }
  if (icon === 'StopCircle') {
    return <FontAwesomeIcon icon={faStopCircle} />;
  }
  if (icon === 'Stopwatch') {
    return <FontAwesomeIcon icon={faStopwatch} />;
  }
  if (icon === 'Store') {
    return <FontAwesomeIcon icon={faStore} />;
  }
  if (icon === 'StoreAlt') {
    return <FontAwesomeIcon icon={faStoreAlt} />;
  }
  if (icon === 'Stream') {
    return <FontAwesomeIcon icon={faStream} />;
  }
  if (icon === 'StreetView') {
    return <FontAwesomeIcon icon={faStreetView} />;
  }
  if (icon === 'Strikethrough') {
    return <FontAwesomeIcon icon={faStrikethrough} />;
  }
  if (icon === 'Stroopwafel') {
    return <FontAwesomeIcon icon={faStroopwafel} />;
  }
  if (icon === 'Subscript') {
    return <FontAwesomeIcon icon={faSubscript} />;
  }
  if (icon === 'Subway') {
    return <FontAwesomeIcon icon={faSubway} />;
  }
  if (icon === 'Suitcase') {
    return <FontAwesomeIcon icon={faSuitcase} />;
  }
  if (icon === 'SuitcaseRolling') {
    return <FontAwesomeIcon icon={faSuitcaseRolling} />;
  }
  if (icon === 'Sun') {
    return <FontAwesomeIcon icon={faSun} />;
  }
  if (icon === 'Superscript') {
    return <FontAwesomeIcon icon={faSuperscript} />;
  }
  if (icon === 'Surprise') {
    return <FontAwesomeIcon icon={faSurprise} />;
  }
  if (icon === 'Swatchbook') {
    return <FontAwesomeIcon icon={faSwatchbook} />;
  }
  if (icon === 'Swimmer') {
    return <FontAwesomeIcon icon={faSwimmer} />;
  }
  if (icon === 'SwimmingPool') {
    return <FontAwesomeIcon icon={faSwimmingPool} />;
  }
  if (icon === 'Synagogue') {
    return <FontAwesomeIcon icon={faSynagogue} />;
  }
  if (icon === 'Sync') {
    return <FontAwesomeIcon icon={faSync} />;
  }
  if (icon === 'SyncAlt') {
    return <FontAwesomeIcon icon={faSyncAlt} />;
  }
  if (icon === 'Syringe') {
    return <FontAwesomeIcon icon={faSyringe} />;
  }
  if (icon === 'Table') {
    return <FontAwesomeIcon icon={faTable} />;
  }
  if (icon === 'TableTennis') {
    return <FontAwesomeIcon icon={faTableTennis} />;
  }
  if (icon === 'Tablet') {
    return <FontAwesomeIcon icon={faTablet} />;
  }
  if (icon === 'TabletAlt') {
    return <FontAwesomeIcon icon={faTabletAlt} />;
  }
  if (icon === 'Tablets') {
    return <FontAwesomeIcon icon={faTablets} />;
  }
  if (icon === 'TachometerAlt') {
    return <FontAwesomeIcon icon={faTachometerAlt} />;
  }
  if (icon === 'Tag') {
    return <FontAwesomeIcon icon={faTag} />;
  }
  if (icon === 'Tags') {
    return <FontAwesomeIcon icon={faTags} />;
  }
  if (icon === 'Tape') {
    return <FontAwesomeIcon icon={faTape} />;
  }
  if (icon === 'Tasks') {
    return <FontAwesomeIcon icon={faTasks} />;
  }
  if (icon === 'Taxi') {
    return <FontAwesomeIcon icon={faTaxi} />;
  }
  if (icon === 'Teeth') {
    return <FontAwesomeIcon icon={faTeeth} />;
  }
  if (icon === 'TeethOpen') {
    return <FontAwesomeIcon icon={faTeethOpen} />;
  }
  if (icon === 'TemperatureHigh') {
    return <FontAwesomeIcon icon={faTemperatureHigh} />;
  }
  if (icon === 'TemperatureLow') {
    return <FontAwesomeIcon icon={faTemperatureLow} />;
  }
  if (icon === 'Tenge') {
    return <FontAwesomeIcon icon={faTenge} />;
  }
  if (icon === 'Terminal') {
    return <FontAwesomeIcon icon={faTerminal} />;
  }
  if (icon === 'TextHeight') {
    return <FontAwesomeIcon icon={faTextHeight} />;
  }
  if (icon === 'TextWidth') {
    return <FontAwesomeIcon icon={faTextWidth} />;
  }
  if (icon === 'Th') {
    return <FontAwesomeIcon icon={faTh} />;
  }
  if (icon === 'ThLarge') {
    return <FontAwesomeIcon icon={faThLarge} />;
  }
  if (icon === 'ThList') {
    return <FontAwesomeIcon icon={faThList} />;
  }
  if (icon === 'TheaterMasks') {
    return <FontAwesomeIcon icon={faTheaterMasks} />;
  }
  if (icon === 'Thermometer') {
    return <FontAwesomeIcon icon={faThermometer} />;
  }
  if (icon === 'ThermometerEmpty') {
    return <FontAwesomeIcon icon={faThermometerEmpty} />;
  }
  if (icon === 'ThermometerFull') {
    return <FontAwesomeIcon icon={faThermometerFull} />;
  }
  if (icon === 'ThermometerHalf') {
    return <FontAwesomeIcon icon={faThermometerHalf} />;
  }
  if (icon === 'ThermometerQuarter') {
    return <FontAwesomeIcon icon={faThermometerQuarter} />;
  }
  if (icon === 'ThermometerThreeQuarters') {
    return <FontAwesomeIcon icon={faThermometerThreeQuarters} />;
  }
  if (icon === 'ThumbsDown') {
    return <FontAwesomeIcon icon={faThumbsDown} />;
  }
  if (icon === 'ThumbsUp') {
    return <FontAwesomeIcon icon={faThumbsUp} />;
  }
  if (icon === 'Thumbtack') {
    return <FontAwesomeIcon icon={faThumbtack} />;
  }
  if (icon === 'TicketAlt') {
    return <FontAwesomeIcon icon={faTicketAlt} />;
  }
  if (icon === 'Times') {
    return <FontAwesomeIcon icon={faTimes} />;
  }
  if (icon === 'TimesCircle') {
    return <FontAwesomeIcon icon={faTimesCircle} />;
  }
  if (icon === 'Tint') {
    return <FontAwesomeIcon icon={faTint} />;
  }
  if (icon === 'TintSlash') {
    return <FontAwesomeIcon icon={faTintSlash} />;
  }
  if (icon === 'Tired') {
    return <FontAwesomeIcon icon={faTired} />;
  }
  if (icon === 'ToggleOff') {
    return <FontAwesomeIcon icon={faToggleOff} />;
  }
  if (icon === 'ToggleOn') {
    return <FontAwesomeIcon icon={faToggleOn} />;
  }
  if (icon === 'Toilet') {
    return <FontAwesomeIcon icon={faToilet} />;
  }
  if (icon === 'ToiletPaper') {
    return <FontAwesomeIcon icon={faToiletPaper} />;
  }
  if (icon === 'Toolbox') {
    return <FontAwesomeIcon icon={faToolbox} />;
  }
  if (icon === 'Tools') {
    return <FontAwesomeIcon icon={faTools} />;
  }
  if (icon === 'Tooth') {
    return <FontAwesomeIcon icon={faTooth} />;
  }
  if (icon === 'Torah') {
    return <FontAwesomeIcon icon={faTorah} />;
  }
  if (icon === 'ToriiGate') {
    return <FontAwesomeIcon icon={faToriiGate} />;
  }
  if (icon === 'Tractor') {
    return <FontAwesomeIcon icon={faTractor} />;
  }
  if (icon === 'Trademark') {
    return <FontAwesomeIcon icon={faTrademark} />;
  }
  if (icon === 'TrafficLight') {
    return <FontAwesomeIcon icon={faTrafficLight} />;
  }
  if (icon === 'Trailer') {
    return <FontAwesomeIcon icon={faTrailer} />;
  }
  if (icon === 'Train') {
    return <FontAwesomeIcon icon={faTrain} />;
  }
  if (icon === 'Tram') {
    return <FontAwesomeIcon icon={faTram} />;
  }
  if (icon === 'Transgender') {
    return <FontAwesomeIcon icon={faTransgender} />;
  }
  if (icon === 'TransgenderAlt') {
    return <FontAwesomeIcon icon={faTransgenderAlt} />;
  }
  if (icon === 'Trash') {
    return <FontAwesomeIcon icon={faTrash} />;
  }
  if (icon === 'TrashAlt') {
    return <FontAwesomeIcon icon={faTrashAlt} />;
  }
  if (icon === 'TrashRestore') {
    return <FontAwesomeIcon icon={faTrashRestore} />;
  }
  if (icon === 'TrashRestoreAlt') {
    return <FontAwesomeIcon icon={faTrashRestoreAlt} />;
  }
  if (icon === 'Tree') {
    return <FontAwesomeIcon icon={faTree} />;
  }
  if (icon === 'Trophy') {
    return <FontAwesomeIcon icon={faTrophy} />;
  }
  if (icon === 'Truck') {
    return <FontAwesomeIcon icon={faTruck} />;
  }
  if (icon === 'TruckLoading') {
    return <FontAwesomeIcon icon={faTruckLoading} />;
  }
  if (icon === 'TruckMonster') {
    return <FontAwesomeIcon icon={faTruckMonster} />;
  }
  if (icon === 'TruckMoving') {
    return <FontAwesomeIcon icon={faTruckMoving} />;
  }
  if (icon === 'TruckPickup') {
    return <FontAwesomeIcon icon={faTruckPickup} />;
  }
  if (icon === 'Tshirt') {
    return <FontAwesomeIcon icon={faTshirt} />;
  }
  if (icon === 'Tty') {
    return <FontAwesomeIcon icon={faTty} />;
  }
  if (icon === 'Tv') {
    return <FontAwesomeIcon icon={faTv} />;
  }
  if (icon === 'Umbrella') {
    return <FontAwesomeIcon icon={faUmbrella} />;
  }
  if (icon === 'UmbrellaBeach') {
    return <FontAwesomeIcon icon={faUmbrellaBeach} />;
  }
  if (icon === 'Underline') {
    return <FontAwesomeIcon icon={faUnderline} />;
  }
  if (icon === 'Undo') {
    return <FontAwesomeIcon icon={faUndo} />;
  }
  if (icon === 'UndoAlt') {
    return <FontAwesomeIcon icon={faUndoAlt} />;
  }
  if (icon === 'UniversalAccess') {
    return <FontAwesomeIcon icon={faUniversalAccess} />;
  }
  if (icon === 'University') {
    return <FontAwesomeIcon icon={faUniversity} />;
  }
  if (icon === 'Unlink') {
    return <FontAwesomeIcon icon={faUnlink} />;
  }
  if (icon === 'Unlock') {
    return <FontAwesomeIcon icon={faUnlock} />;
  }
  if (icon === 'UnlockAlt') {
    return <FontAwesomeIcon icon={faUnlockAlt} />;
  }
  if (icon === 'Upload') {
    return <FontAwesomeIcon icon={faUpload} />;
  }
  if (icon === 'User') {
    return <FontAwesomeIcon icon={faUser} />;
  }
  if (icon === 'UserAlt') {
    return <FontAwesomeIcon icon={faUserAlt} />;
  }
  if (icon === 'UserAltSlash') {
    return <FontAwesomeIcon icon={faUserAltSlash} />;
  }
  if (icon === 'UserAstronaut') {
    return <FontAwesomeIcon icon={faUserAstronaut} />;
  }
  if (icon === 'UserCheck') {
    return <FontAwesomeIcon icon={faUserCheck} />;
  }
  if (icon === 'UserCircle') {
    return <FontAwesomeIcon icon={faUserCircle} />;
  }
  if (icon === 'UserClock') {
    return <FontAwesomeIcon icon={faUserClock} />;
  }
  if (icon === 'UserCog') {
    return <FontAwesomeIcon icon={faUserCog} />;
  }
  if (icon === 'UserEdit') {
    return <FontAwesomeIcon icon={faUserEdit} />;
  }
  if (icon === 'UserFriends') {
    return <FontAwesomeIcon icon={faUserFriends} />;
  }
  if (icon === 'UserGraduate') {
    return <FontAwesomeIcon icon={faUserGraduate} />;
  }
  if (icon === 'UserInjured') {
    return <FontAwesomeIcon icon={faUserInjured} />;
  }
  if (icon === 'UserLock') {
    return <FontAwesomeIcon icon={faUserLock} />;
  }
  if (icon === 'UserMd') {
    return <FontAwesomeIcon icon={faUserMd} />;
  }
  if (icon === 'UserMinus') {
    return <FontAwesomeIcon icon={faUserMinus} />;
  }
  if (icon === 'UserNinja') {
    return <FontAwesomeIcon icon={faUserNinja} />;
  }
  if (icon === 'UserNurse') {
    return <FontAwesomeIcon icon={faUserNurse} />;
  }
  if (icon === 'UserPlus') {
    return <FontAwesomeIcon icon={faUserPlus} />;
  }
  if (icon === 'UserSecret') {
    return <FontAwesomeIcon icon={faUserSecret} />;
  }
  if (icon === 'UserShield') {
    return <FontAwesomeIcon icon={faUserShield} />;
  }
  if (icon === 'UserSlash') {
    return <FontAwesomeIcon icon={faUserSlash} />;
  }
  if (icon === 'UserTag') {
    return <FontAwesomeIcon icon={faUserTag} />;
  }
  if (icon === 'UserTie') {
    return <FontAwesomeIcon icon={faUserTie} />;
  }
  if (icon === 'UserTimes') {
    return <FontAwesomeIcon icon={faUserTimes} />;
  }
  if (icon === 'Users') {
    return <FontAwesomeIcon icon={faUsers} />;
  }
  if (icon === 'UsersCog') {
    return <FontAwesomeIcon icon={faUsersCog} />;
  }
  if (icon === 'UtensilSpoon') {
    return <FontAwesomeIcon icon={faUtensilSpoon} />;
  }
  if (icon === 'Utensils') {
    return <FontAwesomeIcon icon={faUtensils} />;
  }
  if (icon === 'VectorSquare') {
    return <FontAwesomeIcon icon={faVectorSquare} />;
  }
  if (icon === 'Venus') {
    return <FontAwesomeIcon icon={faVenus} />;
  }
  if (icon === 'VenusDouble') {
    return <FontAwesomeIcon icon={faVenusDouble} />;
  }
  if (icon === 'VenusMars') {
    return <FontAwesomeIcon icon={faVenusMars} />;
  }
  if (icon === 'Vial') {
    return <FontAwesomeIcon icon={faVial} />;
  }
  if (icon === 'Vials') {
    return <FontAwesomeIcon icon={faVials} />;
  }
  if (icon === 'Video') {
    return <FontAwesomeIcon icon={faVideo} />;
  }
  if (icon === 'VideoSlash') {
    return <FontAwesomeIcon icon={faVideoSlash} />;
  }
  if (icon === 'Vihara') {
    return <FontAwesomeIcon icon={faVihara} />;
  }
  if (icon === 'Voicemail') {
    return <FontAwesomeIcon icon={faVoicemail} />;
  }
  if (icon === 'VolleyballBall') {
    return <FontAwesomeIcon icon={faVolleyballBall} />;
  }
  if (icon === 'VolumeDown') {
    return <FontAwesomeIcon icon={faVolumeDown} />;
  }
  if (icon === 'VolumeMute') {
    return <FontAwesomeIcon icon={faVolumeMute} />;
  }
  if (icon === 'VolumeOff') {
    return <FontAwesomeIcon icon={faVolumeOff} />;
  }
  if (icon === 'VolumeUp') {
    return <FontAwesomeIcon icon={faVolumeUp} />;
  }
  if (icon === 'VoteYea') {
    return <FontAwesomeIcon icon={faVoteYea} />;
  }
  if (icon === 'VrCardboard') {
    return <FontAwesomeIcon icon={faVrCardboard} />;
  }
  if (icon === 'Walking') {
    return <FontAwesomeIcon icon={faWalking} />;
  }
  if (icon === 'Wallet') {
    return <FontAwesomeIcon icon={faWallet} />;
  }
  if (icon === 'Warehouse') {
    return <FontAwesomeIcon icon={faWarehouse} />;
  }
  if (icon === 'Water') {
    return <FontAwesomeIcon icon={faWater} />;
  }
  if (icon === 'WaveSquare') {
    return <FontAwesomeIcon icon={faWaveSquare} />;
  }
  if (icon === 'Weight') {
    return <FontAwesomeIcon icon={faWeight} />;
  }
  if (icon === 'WeightHanging') {
    return <FontAwesomeIcon icon={faWeightHanging} />;
  }
  if (icon === 'Wheelchair') {
    return <FontAwesomeIcon icon={faWheelchair} />;
  }
  if (icon === 'Wifi') {
    return <FontAwesomeIcon icon={faWifi} />;
  }
  if (icon === 'Wind') {
    return <FontAwesomeIcon icon={faWind} />;
  }
  if (icon === 'WindowClose') {
    return <FontAwesomeIcon icon={faWindowClose} />;
  }
  if (icon === 'WindowMaximize') {
    return <FontAwesomeIcon icon={faWindowMaximize} />;
  }
  if (icon === 'WindowMinimize') {
    return <FontAwesomeIcon icon={faWindowMinimize} />;
  }
  if (icon === 'WindowRestore') {
    return <FontAwesomeIcon icon={faWindowRestore} />;
  }
  if (icon === 'WineBottle') {
    return <FontAwesomeIcon icon={faWineBottle} />;
  }
  if (icon === 'WineGlass') {
    return <FontAwesomeIcon icon={faWineGlass} />;
  }
  if (icon === 'WineGlassAlt') {
    return <FontAwesomeIcon icon={faWineGlassAlt} />;
  }
  if (icon === 'WonSign') {
    return <FontAwesomeIcon icon={faWonSign} />;
  }
  if (icon === 'Wrench') {
    return <FontAwesomeIcon icon={faWrench} />;
  }
  if (icon === 'XRay') {
    return <FontAwesomeIcon icon={faXRay} />;
  }
  if (icon === 'YenSign') {
    return <FontAwesomeIcon icon={faYenSign} />;
  }
  if (icon === 'YinYang') {
    return <FontAwesomeIcon icon={faYinYang} />;
  }
  if (icon === '500px') {
    return <FontAwesomeIcon icon={fa500px} />;
  }
  if (icon === 'AccessibleIcon') {
    return <FontAwesomeIcon icon={faAccessibleIcon} />;
  }
  if (icon === 'Accusoft') {
    return <FontAwesomeIcon icon={faAccusoft} />;
  }
  if (icon === 'AcquisitionsIncorporated') {
    return <FontAwesomeIcon icon={faAcquisitionsIncorporated} />;
  }
  if (icon === 'Adn') {
    return <FontAwesomeIcon icon={faAdn} />;
  }
  if (icon === 'Adobe') {
    return <FontAwesomeIcon icon={faAdobe} />;
  }
  if (icon === 'Adversal') {
    return <FontAwesomeIcon icon={faAdversal} />;
  }
  if (icon === 'Affiliatetheme') {
    return <FontAwesomeIcon icon={faAffiliatetheme} />;
  }
  if (icon === 'Airbnb') {
    return <FontAwesomeIcon icon={faAirbnb} />;
  }
  if (icon === 'Algolia') {
    return <FontAwesomeIcon icon={faAlgolia} />;
  }
  if (icon === 'Alipay') {
    return <FontAwesomeIcon icon={faAlipay} />;
  }
  if (icon === 'Amazon') {
    return <FontAwesomeIcon icon={faAmazon} />;
  }
  if (icon === 'AmazonPay') {
    return <FontAwesomeIcon icon={faAmazonPay} />;
  }
  if (icon === 'Amilia') {
    return <FontAwesomeIcon icon={faAmilia} />;
  }
  if (icon === 'Android') {
    return <FontAwesomeIcon icon={faAndroid} />;
  }
  if (icon === 'Angellist') {
    return <FontAwesomeIcon icon={faAngellist} />;
  }
  if (icon === 'Angrycreative') {
    return <FontAwesomeIcon icon={faAngrycreative} />;
  }
  if (icon === 'Angular') {
    return <FontAwesomeIcon icon={faAngular} />;
  }
  if (icon === 'AppStore') {
    return <FontAwesomeIcon icon={faAppStore} />;
  }
  if (icon === 'AppStoreIos') {
    return <FontAwesomeIcon icon={faAppStoreIos} />;
  }
  if (icon === 'Apper') {
    return <FontAwesomeIcon icon={faApper} />;
  }
  if (icon === 'Apple') {
    return <FontAwesomeIcon icon={faApple} />;
  }
  if (icon === 'ApplePay') {
    return <FontAwesomeIcon icon={faApplePay} />;
  }
  if (icon === 'Artstation') {
    return <FontAwesomeIcon icon={faArtstation} />;
  }
  if (icon === 'Asymmetrik') {
    return <FontAwesomeIcon icon={faAsymmetrik} />;
  }
  if (icon === 'Atlassian') {
    return <FontAwesomeIcon icon={faAtlassian} />;
  }
  if (icon === 'Audible') {
    return <FontAwesomeIcon icon={faAudible} />;
  }
  if (icon === 'Autoprefixer') {
    return <FontAwesomeIcon icon={faAutoprefixer} />;
  }
  if (icon === 'Avianex') {
    return <FontAwesomeIcon icon={faAvianex} />;
  }
  if (icon === 'Aviato') {
    return <FontAwesomeIcon icon={faAviato} />;
  }
  if (icon === 'Aws') {
    return <FontAwesomeIcon icon={faAws} />;
  }
  if (icon === 'Bandcamp') {
    return <FontAwesomeIcon icon={faBandcamp} />;
  }
  if (icon === 'BattleNet') {
    return <FontAwesomeIcon icon={faBattleNet} />;
  }
  if (icon === 'Behance') {
    return <FontAwesomeIcon icon={faBehance} />;
  }
  if (icon === 'BehanceSquare') {
    return <FontAwesomeIcon icon={faBehanceSquare} />;
  }
  if (icon === 'Bimobject') {
    return <FontAwesomeIcon icon={faBimobject} />;
  }
  if (icon === 'Bitbucket') {
    return <FontAwesomeIcon icon={faBitbucket} />;
  }
  if (icon === 'Bitcoin') {
    return <FontAwesomeIcon icon={faBitcoin} />;
  }
  if (icon === 'Bity') {
    return <FontAwesomeIcon icon={faBity} />;
  }
  if (icon === 'BlackTie') {
    return <FontAwesomeIcon icon={faBlackTie} />;
  }
  if (icon === 'Blackberry') {
    return <FontAwesomeIcon icon={faBlackberry} />;
  }
  if (icon === 'Blogger') {
    return <FontAwesomeIcon icon={faBlogger} />;
  }
  if (icon === 'BloggerB') {
    return <FontAwesomeIcon icon={faBloggerB} />;
  }
  if (icon === 'Bluetooth') {
    return <FontAwesomeIcon icon={faBluetooth} />;
  }
  if (icon === 'BluetoothB') {
    return <FontAwesomeIcon icon={faBluetoothB} />;
  }
  if (icon === 'Bootstrap') {
    return <FontAwesomeIcon icon={faBootstrap} />;
  }
  if (icon === 'Btc') {
    return <FontAwesomeIcon icon={faBtc} />;
  }
  if (icon === 'Buffer') {
    return <FontAwesomeIcon icon={faBuffer} />;
  }
  if (icon === 'Buromobelexperte') {
    return <FontAwesomeIcon icon={faBuromobelexperte} />;
  }
  if (icon === 'BuyNLarge') {
    return <FontAwesomeIcon icon={faBuyNLarge} />;
  }
  if (icon === 'Buysellads') {
    return <FontAwesomeIcon icon={faBuysellads} />;
  }
  if (icon === 'CanadianMapleLeaf') {
    return <FontAwesomeIcon icon={faCanadianMapleLeaf} />;
  }
  if (icon === 'CcAmazonPay') {
    return <FontAwesomeIcon icon={faCcAmazonPay} />;
  }
  if (icon === 'CcAmex') {
    return <FontAwesomeIcon icon={faCcAmex} />;
  }
  if (icon === 'CcApplePay') {
    return <FontAwesomeIcon icon={faCcApplePay} />;
  }
  if (icon === 'CcDinersClub') {
    return <FontAwesomeIcon icon={faCcDinersClub} />;
  }
  if (icon === 'CcDiscover') {
    return <FontAwesomeIcon icon={faCcDiscover} />;
  }
  if (icon === 'CcJcb') {
    return <FontAwesomeIcon icon={faCcJcb} />;
  }
  if (icon === 'CcMastercard') {
    return <FontAwesomeIcon icon={faCcMastercard} />;
  }
  if (icon === 'CcPaypal') {
    return <FontAwesomeIcon icon={faCcPaypal} />;
  }
  if (icon === 'CcStripe') {
    return <FontAwesomeIcon icon={faCcStripe} />;
  }
  if (icon === 'CcVisa') {
    return <FontAwesomeIcon icon={faCcVisa} />;
  }
  if (icon === 'Centercode') {
    return <FontAwesomeIcon icon={faCentercode} />;
  }
  if (icon === 'Centos') {
    return <FontAwesomeIcon icon={faCentos} />;
  }
  if (icon === 'Chrome') {
    return <FontAwesomeIcon icon={faChrome} />;
  }
  if (icon === 'Chromecast') {
    return <FontAwesomeIcon icon={faChromecast} />;
  }
  if (icon === 'Cloudscale') {
    return <FontAwesomeIcon icon={faCloudscale} />;
  }
  if (icon === 'Cloudsmith') {
    return <FontAwesomeIcon icon={faCloudsmith} />;
  }
  if (icon === 'Cloudversify') {
    return <FontAwesomeIcon icon={faCloudversify} />;
  }
  if (icon === 'Codepen') {
    return <FontAwesomeIcon icon={faCodepen} />;
  }
  if (icon === 'Codiepie') {
    return <FontAwesomeIcon icon={faCodiepie} />;
  }
  if (icon === 'Confluence') {
    return <FontAwesomeIcon icon={faConfluence} />;
  }
  if (icon === 'Connectdevelop') {
    return <FontAwesomeIcon icon={faConnectdevelop} />;
  }
  if (icon === 'Contao') {
    return <FontAwesomeIcon icon={faContao} />;
  }
  if (icon === 'CottonBureau') {
    return <FontAwesomeIcon icon={faCottonBureau} />;
  }
  if (icon === 'Cpanel') {
    return <FontAwesomeIcon icon={faCpanel} />;
  }
  if (icon === 'CreativeCommons') {
    return <FontAwesomeIcon icon={faCreativeCommons} />;
  }
  if (icon === 'CreativeCommonsBy') {
    return <FontAwesomeIcon icon={faCreativeCommonsBy} />;
  }
  if (icon === 'CreativeCommonsNc') {
    return <FontAwesomeIcon icon={faCreativeCommonsNc} />;
  }
  if (icon === 'CreativeCommonsNcEu') {
    return <FontAwesomeIcon icon={faCreativeCommonsNcEu} />;
  }
  if (icon === 'CreativeCommonsNcJp') {
    return <FontAwesomeIcon icon={faCreativeCommonsNcJp} />;
  }
  if (icon === 'CreativeCommonsNd') {
    return <FontAwesomeIcon icon={faCreativeCommonsNd} />;
  }
  if (icon === 'CreativeCommonsPd') {
    return <FontAwesomeIcon icon={faCreativeCommonsPd} />;
  }
  if (icon === 'CreativeCommonsPdAlt') {
    return <FontAwesomeIcon icon={faCreativeCommonsPdAlt} />;
  }
  if (icon === 'CreativeCommonsRemix') {
    return <FontAwesomeIcon icon={faCreativeCommonsRemix} />;
  }
  if (icon === 'CreativeCommonsSa') {
    return <FontAwesomeIcon icon={faCreativeCommonsSa} />;
  }
  if (icon === 'CreativeCommonsSampling') {
    return <FontAwesomeIcon icon={faCreativeCommonsSampling} />;
  }
  if (icon === 'CreativeCommonsSamplingPlus') {
    return <FontAwesomeIcon icon={faCreativeCommonsSamplingPlus} />;
  }
  if (icon === 'CreativeCommonsShare') {
    return <FontAwesomeIcon icon={faCreativeCommonsShare} />;
  }
  if (icon === 'CreativeCommonsZero') {
    return <FontAwesomeIcon icon={faCreativeCommonsZero} />;
  }
  if (icon === 'CriticalRole') {
    return <FontAwesomeIcon icon={faCriticalRole} />;
  }
  if (icon === 'Css3') {
    return <FontAwesomeIcon icon={faCss3} />;
  }
  if (icon === 'Css3Alt') {
    return <FontAwesomeIcon icon={faCss3Alt} />;
  }
  if (icon === 'Cuttlefish') {
    return <FontAwesomeIcon icon={faCuttlefish} />;
  }
  if (icon === 'DAndD') {
    return <FontAwesomeIcon icon={faDAndD} />;
  }
  if (icon === 'DAndDBeyond') {
    return <FontAwesomeIcon icon={faDAndDBeyond} />;
  }
  if (icon === 'Dailymotion') {
    return <FontAwesomeIcon icon={faDailymotion} />;
  }
  if (icon === 'Dashcube') {
    return <FontAwesomeIcon icon={faDashcube} />;
  }
  if (icon === 'Delicious') {
    return <FontAwesomeIcon icon={faDelicious} />;
  }
  if (icon === 'Deploydog') {
    return <FontAwesomeIcon icon={faDeploydog} />;
  }
  if (icon === 'Deskpro') {
    return <FontAwesomeIcon icon={faDeskpro} />;
  }
  if (icon === 'Dev') {
    return <FontAwesomeIcon icon={faDev} />;
  }
  if (icon === 'Deviantart') {
    return <FontAwesomeIcon icon={faDeviantart} />;
  }
  if (icon === 'Dhl') {
    return <FontAwesomeIcon icon={faDhl} />;
  }
  if (icon === 'Diaspora') {
    return <FontAwesomeIcon icon={faDiaspora} />;
  }
  if (icon === 'Digg') {
    return <FontAwesomeIcon icon={faDigg} />;
  }
  if (icon === 'DigitalOcean') {
    return <FontAwesomeIcon icon={faDigitalOcean} />;
  }
  if (icon === 'Discord') {
    return <FontAwesomeIcon icon={faDiscord} />;
  }
  if (icon === 'Discourse') {
    return <FontAwesomeIcon icon={faDiscourse} />;
  }
  if (icon === 'Dochub') {
    return <FontAwesomeIcon icon={faDochub} />;
  }
  if (icon === 'Docker') {
    return <FontAwesomeIcon icon={faDocker} />;
  }
  if (icon === 'Draft2digital') {
    return <FontAwesomeIcon icon={faDraft2digital} />;
  }
  if (icon === 'Dribbble') {
    return <FontAwesomeIcon icon={faDribbble} />;
  }
  if (icon === 'DribbbleSquare') {
    return <FontAwesomeIcon icon={faDribbbleSquare} />;
  }
  if (icon === 'Dropbox') {
    return <FontAwesomeIcon icon={faDropbox} />;
  }
  if (icon === 'Drupal') {
    return <FontAwesomeIcon icon={faDrupal} />;
  }
  if (icon === 'Dyalog') {
    return <FontAwesomeIcon icon={faDyalog} />;
  }
  if (icon === 'Earlybirds') {
    return <FontAwesomeIcon icon={faEarlybirds} />;
  }
  if (icon === 'Ebay') {
    return <FontAwesomeIcon icon={faEbay} />;
  }
  if (icon === 'Edge') {
    return <FontAwesomeIcon icon={faEdge} />;
  }
  if (icon === 'Elementor') {
    return <FontAwesomeIcon icon={faElementor} />;
  }
  if (icon === 'Ello') {
    return <FontAwesomeIcon icon={faEllo} />;
  }
  if (icon === 'Ember') {
    return <FontAwesomeIcon icon={faEmber} />;
  }
  if (icon === 'Empire') {
    return <FontAwesomeIcon icon={faEmpire} />;
  }
  if (icon === 'Envira') {
    return <FontAwesomeIcon icon={faEnvira} />;
  }
  if (icon === 'Erlang') {
    return <FontAwesomeIcon icon={faErlang} />;
  }
  if (icon === 'Ethereum') {
    return <FontAwesomeIcon icon={faEthereum} />;
  }
  if (icon === 'Etsy') {
    return <FontAwesomeIcon icon={faEtsy} />;
  }
  if (icon === 'Evernote') {
    return <FontAwesomeIcon icon={faEvernote} />;
  }
  if (icon === 'Expeditedssl') {
    return <FontAwesomeIcon icon={faExpeditedssl} />;
  }
  if (icon === 'Facebook') {
    return <FontAwesomeIcon icon={faFacebook} />;
  }
  if (icon === 'FacebookF') {
    return <FontAwesomeIcon icon={faFacebookF} />;
  }
  if (icon === 'FacebookMessenger') {
    return <FontAwesomeIcon icon={faFacebookMessenger} />;
  }
  if (icon === 'FacebookSquare') {
    return <FontAwesomeIcon icon={faFacebookSquare} />;
  }
  if (icon === 'FantasyFlightGames') {
    return <FontAwesomeIcon icon={faFantasyFlightGames} />;
  }
  if (icon === 'Fedex') {
    return <FontAwesomeIcon icon={faFedex} />;
  }
  if (icon === 'Fedora') {
    return <FontAwesomeIcon icon={faFedora} />;
  }
  if (icon === 'Figma') {
    return <FontAwesomeIcon icon={faFigma} />;
  }
  if (icon === 'Firefox') {
    return <FontAwesomeIcon icon={faFirefox} />;
  }
  if (icon === 'FirefoxBrowser') {
    return <FontAwesomeIcon icon={faFirefoxBrowser} />;
  }
  if (icon === 'FirstOrder') {
    return <FontAwesomeIcon icon={faFirstOrder} />;
  }
  if (icon === 'FirstOrderAlt') {
    return <FontAwesomeIcon icon={faFirstOrderAlt} />;
  }
  if (icon === 'Firstdraft') {
    return <FontAwesomeIcon icon={faFirstdraft} />;
  }
  if (icon === 'Flickr') {
    return <FontAwesomeIcon icon={faFlickr} />;
  }
  if (icon === 'Flipboard') {
    return <FontAwesomeIcon icon={faFlipboard} />;
  }
  if (icon === 'Fly') {
    return <FontAwesomeIcon icon={faFly} />;
  }
  if (icon === 'FontAwesome') {
    return <FontAwesomeIcon icon={faFontAwesome} />;
  }
  if (icon === 'FontAwesomeAlt') {
    return <FontAwesomeIcon icon={faFontAwesomeAlt} />;
  }
  if (icon === 'FontAwesomeFlag') {
    return <FontAwesomeIcon icon={faFontAwesomeFlag} />;
  }
  if (icon === 'Fonticons') {
    return <FontAwesomeIcon icon={faFonticons} />;
  }
  if (icon === 'FonticonsFi') {
    return <FontAwesomeIcon icon={faFonticonsFi} />;
  }
  if (icon === 'FortAwesome') {
    return <FontAwesomeIcon icon={faFortAwesome} />;
  }
  if (icon === 'FortAwesomeAlt') {
    return <FontAwesomeIcon icon={faFortAwesomeAlt} />;
  }
  if (icon === 'Forumbee') {
    return <FontAwesomeIcon icon={faForumbee} />;
  }
  if (icon === 'Foursquare') {
    return <FontAwesomeIcon icon={faFoursquare} />;
  }
  if (icon === 'FreeCodeCamp') {
    return <FontAwesomeIcon icon={faFreeCodeCamp} />;
  }
  if (icon === 'Freebsd') {
    return <FontAwesomeIcon icon={faFreebsd} />;
  }
  if (icon === 'Fulcrum') {
    return <FontAwesomeIcon icon={faFulcrum} />;
  }
  if (icon === 'GalacticRepublic') {
    return <FontAwesomeIcon icon={faGalacticRepublic} />;
  }
  if (icon === 'GalacticSenate') {
    return <FontAwesomeIcon icon={faGalacticSenate} />;
  }
  if (icon === 'GetPocket') {
    return <FontAwesomeIcon icon={faGetPocket} />;
  }
  if (icon === 'Gg') {
    return <FontAwesomeIcon icon={faGg} />;
  }
  if (icon === 'GgCircle') {
    return <FontAwesomeIcon icon={faGgCircle} />;
  }
  if (icon === 'Git') {
    return <FontAwesomeIcon icon={faGit} />;
  }
  if (icon === 'GitAlt') {
    return <FontAwesomeIcon icon={faGitAlt} />;
  }
  if (icon === 'GitSquare') {
    return <FontAwesomeIcon icon={faGitSquare} />;
  }
  if (icon === 'Github') {
    return <FontAwesomeIcon icon={faGithub} />;
  }
  if (icon === 'GithubAlt') {
    return <FontAwesomeIcon icon={faGithubAlt} />;
  }
  if (icon === 'GithubSquare') {
    return <FontAwesomeIcon icon={faGithubSquare} />;
  }
  if (icon === 'Gitkraken') {
    return <FontAwesomeIcon icon={faGitkraken} />;
  }
  if (icon === 'Gitlab') {
    return <FontAwesomeIcon icon={faGitlab} />;
  }
  if (icon === 'Gitter') {
    return <FontAwesomeIcon icon={faGitter} />;
  }
  if (icon === 'Glide') {
    return <FontAwesomeIcon icon={faGlide} />;
  }
  if (icon === 'GlideG') {
    return <FontAwesomeIcon icon={faGlideG} />;
  }
  if (icon === 'Gofore') {
    return <FontAwesomeIcon icon={faGofore} />;
  }
  if (icon === 'Goodreads') {
    return <FontAwesomeIcon icon={faGoodreads} />;
  }
  if (icon === 'GoodreadsG') {
    return <FontAwesomeIcon icon={faGoodreadsG} />;
  }
  if (icon === 'Google') {
    return <FontAwesomeIcon icon={faGoogle} />;
  }
  if (icon === 'GoogleDrive') {
    return <FontAwesomeIcon icon={faGoogleDrive} />;
  }
  if (icon === 'GooglePlay') {
    return <FontAwesomeIcon icon={faGooglePlay} />;
  }
  if (icon === 'GooglePlus') {
    return <FontAwesomeIcon icon={faGooglePlus} />;
  }
  if (icon === 'GooglePlusG') {
    return <FontAwesomeIcon icon={faGooglePlusG} />;
  }
  if (icon === 'GooglePlusSquare') {
    return <FontAwesomeIcon icon={faGooglePlusSquare} />;
  }
  if (icon === 'GoogleWallet') {
    return <FontAwesomeIcon icon={faGoogleWallet} />;
  }
  if (icon === 'Gratipay') {
    return <FontAwesomeIcon icon={faGratipay} />;
  }
  if (icon === 'Grav') {
    return <FontAwesomeIcon icon={faGrav} />;
  }
  if (icon === 'Gripfire') {
    return <FontAwesomeIcon icon={faGripfire} />;
  }
  if (icon === 'Grunt') {
    return <FontAwesomeIcon icon={faGrunt} />;
  }
  if (icon === 'Gulp') {
    return <FontAwesomeIcon icon={faGulp} />;
  }
  if (icon === 'HackerNews') {
    return <FontAwesomeIcon icon={faHackerNews} />;
  }
  if (icon === 'HackerNewsSquare') {
    return <FontAwesomeIcon icon={faHackerNewsSquare} />;
  }
  if (icon === 'Hackerrank') {
    return <FontAwesomeIcon icon={faHackerrank} />;
  }
  if (icon === 'Hips') {
    return <FontAwesomeIcon icon={faHips} />;
  }
  if (icon === 'HireAHelper') {
    return <FontAwesomeIcon icon={faHireAHelper} />;
  }
  if (icon === 'Hooli') {
    return <FontAwesomeIcon icon={faHooli} />;
  }
  if (icon === 'Hornbill') {
    return <FontAwesomeIcon icon={faHornbill} />;
  }
  if (icon === 'Hotjar') {
    return <FontAwesomeIcon icon={faHotjar} />;
  }
  if (icon === 'Houzz') {
    return <FontAwesomeIcon icon={faHouzz} />;
  }
  if (icon === 'Html5') {
    return <FontAwesomeIcon icon={faHtml5} />;
  }
  if (icon === 'Hubspot') {
    return <FontAwesomeIcon icon={faHubspot} />;
  }
  if (icon === 'Ideal') {
    return <FontAwesomeIcon icon={faIdeal} />;
  }
  if (icon === 'Imdb') {
    return <FontAwesomeIcon icon={faImdb} />;
  }
  if (icon === 'Instagram') {
    return <FontAwesomeIcon icon={faInstagram} />;
  }
  if (icon === 'InstagramSquare') {
    return <FontAwesomeIcon icon={faInstagramSquare} />;
  }
  if (icon === 'Intercom') {
    return <FontAwesomeIcon icon={faIntercom} />;
  }
  if (icon === 'InternetExplorer') {
    return <FontAwesomeIcon icon={faInternetExplorer} />;
  }
  if (icon === 'Invision') {
    return <FontAwesomeIcon icon={faInvision} />;
  }
  if (icon === 'Ioxhost') {
    return <FontAwesomeIcon icon={faIoxhost} />;
  }
  if (icon === 'ItchIo') {
    return <FontAwesomeIcon icon={faItchIo} />;
  }
  if (icon === 'Itunes') {
    return <FontAwesomeIcon icon={faItunes} />;
  }
  if (icon === 'ItunesNote') {
    return <FontAwesomeIcon icon={faItunesNote} />;
  }
  if (icon === 'Java') {
    return <FontAwesomeIcon icon={faJava} />;
  }
  if (icon === 'JediOrder') {
    return <FontAwesomeIcon icon={faJediOrder} />;
  }
  if (icon === 'Jenkins') {
    return <FontAwesomeIcon icon={faJenkins} />;
  }
  if (icon === 'Jira') {
    return <FontAwesomeIcon icon={faJira} />;
  }
  if (icon === 'Joget') {
    return <FontAwesomeIcon icon={faJoget} />;
  }
  if (icon === 'Joomla') {
    return <FontAwesomeIcon icon={faJoomla} />;
  }
  if (icon === 'Js') {
    return <FontAwesomeIcon icon={faJs} />;
  }
  if (icon === 'JsSquare') {
    return <FontAwesomeIcon icon={faJsSquare} />;
  }
  if (icon === 'Jsfiddle') {
    return <FontAwesomeIcon icon={faJsfiddle} />;
  }
  if (icon === 'Kaggle') {
    return <FontAwesomeIcon icon={faKaggle} />;
  }
  if (icon === 'Keybase') {
    return <FontAwesomeIcon icon={faKeybase} />;
  }
  if (icon === 'Keycdn') {
    return <FontAwesomeIcon icon={faKeycdn} />;
  }
  if (icon === 'Kickstarter') {
    return <FontAwesomeIcon icon={faKickstarter} />;
  }
  if (icon === 'KickstarterK') {
    return <FontAwesomeIcon icon={faKickstarterK} />;
  }
  if (icon === 'Korvue') {
    return <FontAwesomeIcon icon={faKorvue} />;
  }
  if (icon === 'Laravel') {
    return <FontAwesomeIcon icon={faLaravel} />;
  }
  if (icon === 'Lastfm') {
    return <FontAwesomeIcon icon={faLastfm} />;
  }
  if (icon === 'LastfmSquare') {
    return <FontAwesomeIcon icon={faLastfmSquare} />;
  }
  if (icon === 'Leanpub') {
    return <FontAwesomeIcon icon={faLeanpub} />;
  }
  if (icon === 'Less') {
    return <FontAwesomeIcon icon={faLess} />;
  }
  if (icon === 'Line') {
    return <FontAwesomeIcon icon={faLine} />;
  }
  if (icon === 'Linkedin') {
    return <FontAwesomeIcon icon={faLinkedin} />;
  }
  if (icon === 'LinkedinIn') {
    return <FontAwesomeIcon icon={faLinkedinIn} />;
  }
  if (icon === 'Linode') {
    return <FontAwesomeIcon icon={faLinode} />;
  }
  if (icon === 'Linux') {
    return <FontAwesomeIcon icon={faLinux} />;
  }
  if (icon === 'Lyft') {
    return <FontAwesomeIcon icon={faLyft} />;
  }
  if (icon === 'Magento') {
    return <FontAwesomeIcon icon={faMagento} />;
  }
  if (icon === 'Mailchimp') {
    return <FontAwesomeIcon icon={faMailchimp} />;
  }
  if (icon === 'Mandalorian') {
    return <FontAwesomeIcon icon={faMandalorian} />;
  }
  if (icon === 'Markdown') {
    return <FontAwesomeIcon icon={faMarkdown} />;
  }
  if (icon === 'Mastodon') {
    return <FontAwesomeIcon icon={faMastodon} />;
  }
  if (icon === 'Maxcdn') {
    return <FontAwesomeIcon icon={faMaxcdn} />;
  }
  if (icon === 'Mdb') {
    return <FontAwesomeIcon icon={faMdb} />;
  }
  if (icon === 'Medapps') {
    return <FontAwesomeIcon icon={faMedapps} />;
  }
  if (icon === 'Medium') {
    return <FontAwesomeIcon icon={faMedium} />;
  }
  if (icon === 'MediumM') {
    return <FontAwesomeIcon icon={faMediumM} />;
  }
  if (icon === 'Medrt') {
    return <FontAwesomeIcon icon={faMedrt} />;
  }
  if (icon === 'Meetup') {
    return <FontAwesomeIcon icon={faMeetup} />;
  }
  if (icon === 'Megaport') {
    return <FontAwesomeIcon icon={faMegaport} />;
  }
  if (icon === 'Mendeley') {
    return <FontAwesomeIcon icon={faMendeley} />;
  }
  if (icon === 'Microblog') {
    return <FontAwesomeIcon icon={faMicroblog} />;
  }
  if (icon === 'Microsoft') {
    return <FontAwesomeIcon icon={faMicrosoft} />;
  }
  if (icon === 'Mix') {
    return <FontAwesomeIcon icon={faMix} />;
  }
  if (icon === 'Mixcloud') {
    return <FontAwesomeIcon icon={faMixcloud} />;
  }
  if (icon === 'Mixer') {
    return <FontAwesomeIcon icon={faMixer} />;
  }
  if (icon === 'Mizuni') {
    return <FontAwesomeIcon icon={faMizuni} />;
  }
  if (icon === 'Modx') {
    return <FontAwesomeIcon icon={faModx} />;
  }
  if (icon === 'Monero') {
    return <FontAwesomeIcon icon={faMonero} />;
  }
  if (icon === 'Napster') {
    return <FontAwesomeIcon icon={faNapster} />;
  }
  if (icon === 'Neos') {
    return <FontAwesomeIcon icon={faNeos} />;
  }
  if (icon === 'Nimblr') {
    return <FontAwesomeIcon icon={faNimblr} />;
  }
  if (icon === 'Node') {
    return <FontAwesomeIcon icon={faNode} />;
  }
  if (icon === 'NodeJs') {
    return <FontAwesomeIcon icon={faNodeJs} />;
  }
  if (icon === 'Npm') {
    return <FontAwesomeIcon icon={faNpm} />;
  }
  if (icon === 'Ns8') {
    return <FontAwesomeIcon icon={faNs8} />;
  }
  if (icon === 'Nutritionix') {
    return <FontAwesomeIcon icon={faNutritionix} />;
  }
  if (icon === 'Odnoklassniki') {
    return <FontAwesomeIcon icon={faOdnoklassniki} />;
  }
  if (icon === 'OdnoklassnikiSquare') {
    return <FontAwesomeIcon icon={faOdnoklassnikiSquare} />;
  }
  if (icon === 'OldRepublic') {
    return <FontAwesomeIcon icon={faOldRepublic} />;
  }
  if (icon === 'Opencart') {
    return <FontAwesomeIcon icon={faOpencart} />;
  }
  if (icon === 'Openid') {
    return <FontAwesomeIcon icon={faOpenid} />;
  }
  if (icon === 'Opera') {
    return <FontAwesomeIcon icon={faOpera} />;
  }
  if (icon === 'OptinMonster') {
    return <FontAwesomeIcon icon={faOptinMonster} />;
  }
  if (icon === 'Orcid') {
    return <FontAwesomeIcon icon={faOrcid} />;
  }
  if (icon === 'Osi') {
    return <FontAwesomeIcon icon={faOsi} />;
  }
  if (icon === 'Page4') {
    return <FontAwesomeIcon icon={faPage4} />;
  }
  if (icon === 'Pagelines') {
    return <FontAwesomeIcon icon={faPagelines} />;
  }
  if (icon === 'Palfed') {
    return <FontAwesomeIcon icon={faPalfed} />;
  }
  if (icon === 'Patreon') {
    return <FontAwesomeIcon icon={faPatreon} />;
  }
  if (icon === 'Paypal') {
    return <FontAwesomeIcon icon={faPaypal} />;
  }
  if (icon === 'PennyArcade') {
    return <FontAwesomeIcon icon={faPennyArcade} />;
  }
  if (icon === 'Periscope') {
    return <FontAwesomeIcon icon={faPeriscope} />;
  }
  if (icon === 'Phabricator') {
    return <FontAwesomeIcon icon={faPhabricator} />;
  }
  if (icon === 'PhoenixFramework') {
    return <FontAwesomeIcon icon={faPhoenixFramework} />;
  }
  if (icon === 'PhoenixSquadron') {
    return <FontAwesomeIcon icon={faPhoenixSquadron} />;
  }
  if (icon === 'Php') {
    return <FontAwesomeIcon icon={faPhp} />;
  }
  if (icon === 'PiedPiper') {
    return <FontAwesomeIcon icon={faPiedPiper} />;
  }
  if (icon === 'PiedPiperAlt') {
    return <FontAwesomeIcon icon={faPiedPiperAlt} />;
  }
  if (icon === 'PiedPiperHat') {
    return <FontAwesomeIcon icon={faPiedPiperHat} />;
  }
  if (icon === 'PiedPiperPp') {
    return <FontAwesomeIcon icon={faPiedPiperPp} />;
  }
  if (icon === 'PiedPiperSquare') {
    return <FontAwesomeIcon icon={faPiedPiperSquare} />;
  }
  if (icon === 'Pinterest') {
    return <FontAwesomeIcon icon={faPinterest} />;
  }
  if (icon === 'PinterestP') {
    return <FontAwesomeIcon icon={faPinterestP} />;
  }
  if (icon === 'PinterestSquare') {
    return <FontAwesomeIcon icon={faPinterestSquare} />;
  }
  if (icon === 'Playstation') {
    return <FontAwesomeIcon icon={faPlaystation} />;
  }
  if (icon === 'ProductHunt') {
    return <FontAwesomeIcon icon={faProductHunt} />;
  }
  if (icon === 'Pushed') {
    return <FontAwesomeIcon icon={faPushed} />;
  }
  if (icon === 'Python') {
    return <FontAwesomeIcon icon={faPython} />;
  }
  if (icon === 'Qq') {
    return <FontAwesomeIcon icon={faQq} />;
  }
  if (icon === 'Quinscape') {
    return <FontAwesomeIcon icon={faQuinscape} />;
  }
  if (icon === 'Quora') {
    return <FontAwesomeIcon icon={faQuora} />;
  }
  if (icon === 'RProject') {
    return <FontAwesomeIcon icon={faRProject} />;
  }
  if (icon === 'RaspberryPi') {
    return <FontAwesomeIcon icon={faRaspberryPi} />;
  }
  if (icon === 'Ravelry') {
    return <FontAwesomeIcon icon={faRavelry} />;
  }
  if (icon === 'React') {
    return <FontAwesomeIcon icon={faReact} />;
  }
  if (icon === 'Reacteurope') {
    return <FontAwesomeIcon icon={faReacteurope} />;
  }
  if (icon === 'Readme') {
    return <FontAwesomeIcon icon={faReadme} />;
  }
  if (icon === 'Rebel') {
    return <FontAwesomeIcon icon={faRebel} />;
  }
  if (icon === 'RedRiver') {
    return <FontAwesomeIcon icon={faRedRiver} />;
  }
  if (icon === 'Reddit') {
    return <FontAwesomeIcon icon={faReddit} />;
  }
  if (icon === 'RedditAlien') {
    return <FontAwesomeIcon icon={faRedditAlien} />;
  }
  if (icon === 'RedditSquare') {
    return <FontAwesomeIcon icon={faRedditSquare} />;
  }
  if (icon === 'Redhat') {
    return <FontAwesomeIcon icon={faRedhat} />;
  }
  if (icon === 'Renren') {
    return <FontAwesomeIcon icon={faRenren} />;
  }
  if (icon === 'Replyd') {
    return <FontAwesomeIcon icon={faReplyd} />;
  }
  if (icon === 'Researchgate') {
    return <FontAwesomeIcon icon={faResearchgate} />;
  }
  if (icon === 'Resolving') {
    return <FontAwesomeIcon icon={faResolving} />;
  }
  if (icon === 'Rev') {
    return <FontAwesomeIcon icon={faRev} />;
  }
  if (icon === 'Rocketchat') {
    return <FontAwesomeIcon icon={faRocketchat} />;
  }
  if (icon === 'Rockrms') {
    return <FontAwesomeIcon icon={faRockrms} />;
  }
  if (icon === 'Safari') {
    return <FontAwesomeIcon icon={faSafari} />;
  }
  if (icon === 'Salesforce') {
    return <FontAwesomeIcon icon={faSalesforce} />;
  }
  if (icon === 'Sass') {
    return <FontAwesomeIcon icon={faSass} />;
  }
  if (icon === 'Schlix') {
    return <FontAwesomeIcon icon={faSchlix} />;
  }
  if (icon === 'Scribd') {
    return <FontAwesomeIcon icon={faScribd} />;
  }
  if (icon === 'Searchengin') {
    return <FontAwesomeIcon icon={faSearchengin} />;
  }
  if (icon === 'Sellcast') {
    return <FontAwesomeIcon icon={faSellcast} />;
  }
  if (icon === 'Sellsy') {
    return <FontAwesomeIcon icon={faSellsy} />;
  }
  if (icon === 'Servicestack') {
    return <FontAwesomeIcon icon={faServicestack} />;
  }
  if (icon === 'Shirtsinbulk') {
    return <FontAwesomeIcon icon={faShirtsinbulk} />;
  }
  if (icon === 'Shopify') {
    return <FontAwesomeIcon icon={faShopify} />;
  }
  if (icon === 'Shopware') {
    return <FontAwesomeIcon icon={faShopware} />;
  }
  if (icon === 'Simplybuilt') {
    return <FontAwesomeIcon icon={faSimplybuilt} />;
  }
  if (icon === 'Sistrix') {
    return <FontAwesomeIcon icon={faSistrix} />;
  }
  if (icon === 'Sith') {
    return <FontAwesomeIcon icon={faSith} />;
  }
  if (icon === 'Sketch') {
    return <FontAwesomeIcon icon={faSketch} />;
  }
  if (icon === 'Skyatlas') {
    return <FontAwesomeIcon icon={faSkyatlas} />;
  }
  if (icon === 'Skype') {
    return <FontAwesomeIcon icon={faSkype} />;
  }
  if (icon === 'Slack') {
    return <FontAwesomeIcon icon={faSlack} />;
  }
  if (icon === 'SlackHash') {
    return <FontAwesomeIcon icon={faSlackHash} />;
  }
  if (icon === 'Slideshare') {
    return <FontAwesomeIcon icon={faSlideshare} />;
  }
  if (icon === 'Snapchat') {
    return <FontAwesomeIcon icon={faSnapchat} />;
  }
  if (icon === 'SnapchatGhost') {
    return <FontAwesomeIcon icon={faSnapchatGhost} />;
  }
  if (icon === 'SnapchatSquare') {
    return <FontAwesomeIcon icon={faSnapchatSquare} />;
  }
  if (icon === 'Soundcloud') {
    return <FontAwesomeIcon icon={faSoundcloud} />;
  }
  if (icon === 'Sourcetree') {
    return <FontAwesomeIcon icon={faSourcetree} />;
  }
  if (icon === 'Speakap') {
    return <FontAwesomeIcon icon={faSpeakap} />;
  }
  if (icon === 'SpeakerDeck') {
    return <FontAwesomeIcon icon={faSpeakerDeck} />;
  }
  if (icon === 'Spotify') {
    return <FontAwesomeIcon icon={faSpotify} />;
  }
  if (icon === 'Squarespace') {
    return <FontAwesomeIcon icon={faSquarespace} />;
  }
  if (icon === 'StackExchange') {
    return <FontAwesomeIcon icon={faStackExchange} />;
  }
  if (icon === 'StackOverflow') {
    return <FontAwesomeIcon icon={faStackOverflow} />;
  }
  if (icon === 'Stackpath') {
    return <FontAwesomeIcon icon={faStackpath} />;
  }
  if (icon === 'Staylinked') {
    return <FontAwesomeIcon icon={faStaylinked} />;
  }
  if (icon === 'Steam') {
    return <FontAwesomeIcon icon={faSteam} />;
  }
  if (icon === 'SteamSquare') {
    return <FontAwesomeIcon icon={faSteamSquare} />;
  }
  if (icon === 'SteamSymbol') {
    return <FontAwesomeIcon icon={faSteamSymbol} />;
  }
  if (icon === 'StickerMule') {
    return <FontAwesomeIcon icon={faStickerMule} />;
  }
  if (icon === 'Strava') {
    return <FontAwesomeIcon icon={faStrava} />;
  }
  if (icon === 'Stripe') {
    return <FontAwesomeIcon icon={faStripe} />;
  }
  if (icon === 'StripeS') {
    return <FontAwesomeIcon icon={faStripeS} />;
  }
  if (icon === 'Studiovinari') {
    return <FontAwesomeIcon icon={faStudiovinari} />;
  }
  if (icon === 'Stumbleupon') {
    return <FontAwesomeIcon icon={faStumbleupon} />;
  }
  if (icon === 'StumbleuponCircle') {
    return <FontAwesomeIcon icon={faStumbleuponCircle} />;
  }
  if (icon === 'Superpowers') {
    return <FontAwesomeIcon icon={faSuperpowers} />;
  }
  if (icon === 'Supple') {
    return <FontAwesomeIcon icon={faSupple} />;
  }
  if (icon === 'Suse') {
    return <FontAwesomeIcon icon={faSuse} />;
  }
  if (icon === 'Swift') {
    return <FontAwesomeIcon icon={faSwift} />;
  }
  if (icon === 'Symfony') {
    return <FontAwesomeIcon icon={faSymfony} />;
  }
  if (icon === 'Teamspeak') {
    return <FontAwesomeIcon icon={faTeamspeak} />;
  }
  if (icon === 'Telegram') {
    return <FontAwesomeIcon icon={faTelegram} />;
  }
  if (icon === 'TelegramPlane') {
    return <FontAwesomeIcon icon={faTelegramPlane} />;
  }
  if (icon === 'TencentWeibo') {
    return <FontAwesomeIcon icon={faTencentWeibo} />;
  }
  if (icon === 'TheRedYeti') {
    return <FontAwesomeIcon icon={faTheRedYeti} />;
  }
  if (icon === 'Themeco') {
    return <FontAwesomeIcon icon={faThemeco} />;
  }
  if (icon === 'Themeisle') {
    return <FontAwesomeIcon icon={faThemeisle} />;
  }
  if (icon === 'ThinkPeaks') {
    return <FontAwesomeIcon icon={faThinkPeaks} />;
  }
  if (icon === 'TradeFederation') {
    return <FontAwesomeIcon icon={faTradeFederation} />;
  }
  if (icon === 'Trello') {
    return <FontAwesomeIcon icon={faTrello} />;
  }
  if (icon === 'Tripadvisor') {
    return <FontAwesomeIcon icon={faTripadvisor} />;
  }
  if (icon === 'Tumblr') {
    return <FontAwesomeIcon icon={faTumblr} />;
  }
  if (icon === 'TumblrSquare') {
    return <FontAwesomeIcon icon={faTumblrSquare} />;
  }
  if (icon === 'Twitch') {
    return <FontAwesomeIcon icon={faTwitch} />;
  }
  if (icon === 'Twitter') {
    return <FontAwesomeIcon icon={faTwitter} />;
  }
  if (icon === 'TwitterSquare') {
    return <FontAwesomeIcon icon={faTwitterSquare} />;
  }
  if (icon === 'Typo3') {
    return <FontAwesomeIcon icon={faTypo3} />;
  }
  if (icon === 'Uber') {
    return <FontAwesomeIcon icon={faUber} />;
  }
  if (icon === 'Ubuntu') {
    return <FontAwesomeIcon icon={faUbuntu} />;
  }
  if (icon === 'Uikit') {
    return <FontAwesomeIcon icon={faUikit} />;
  }
  if (icon === 'Umbraco') {
    return <FontAwesomeIcon icon={faUmbraco} />;
  }
  if (icon === 'Uniregistry') {
    return <FontAwesomeIcon icon={faUniregistry} />;
  }
  if (icon === 'Unity') {
    return <FontAwesomeIcon icon={faUnity} />;
  }
  if (icon === 'Untappd') {
    return <FontAwesomeIcon icon={faUntappd} />;
  }
  if (icon === 'Ups') {
    return <FontAwesomeIcon icon={faUps} />;
  }
  if (icon === 'Usb') {
    return <FontAwesomeIcon icon={faUsb} />;
  }
  if (icon === 'Usps') {
    return <FontAwesomeIcon icon={faUsps} />;
  }
  if (icon === 'Ussunnah') {
    return <FontAwesomeIcon icon={faUssunnah} />;
  }
  if (icon === 'Vaadin') {
    return <FontAwesomeIcon icon={faVaadin} />;
  }
  if (icon === 'Viacoin') {
    return <FontAwesomeIcon icon={faViacoin} />;
  }
  if (icon === 'Viadeo') {
    return <FontAwesomeIcon icon={faViadeo} />;
  }
  if (icon === 'ViadeoSquare') {
    return <FontAwesomeIcon icon={faViadeoSquare} />;
  }
  if (icon === 'Viber') {
    return <FontAwesomeIcon icon={faViber} />;
  }
  if (icon === 'Vimeo') {
    return <FontAwesomeIcon icon={faVimeo} />;
  }
  if (icon === 'VimeoSquare') {
    return <FontAwesomeIcon icon={faVimeoSquare} />;
  }
  if (icon === 'VimeoV') {
    return <FontAwesomeIcon icon={faVimeoV} />;
  }
  if (icon === 'Vine') {
    return <FontAwesomeIcon icon={faVine} />;
  }
  if (icon === 'Vk') {
    return <FontAwesomeIcon icon={faVk} />;
  }
  if (icon === 'Vnv') {
    return <FontAwesomeIcon icon={faVnv} />;
  }
  if (icon === 'Vuejs') {
    return <FontAwesomeIcon icon={faVuejs} />;
  }
  if (icon === 'Waze') {
    return <FontAwesomeIcon icon={faWaze} />;
  }
  if (icon === 'Weebly') {
    return <FontAwesomeIcon icon={faWeebly} />;
  }
  if (icon === 'Weibo') {
    return <FontAwesomeIcon icon={faWeibo} />;
  }
  if (icon === 'Weixin') {
    return <FontAwesomeIcon icon={faWeixin} />;
  }
  if (icon === 'Whatsapp') {
    return <FontAwesomeIcon icon={faWhatsapp} />;
  }
  if (icon === 'WhatsappSquare') {
    return <FontAwesomeIcon icon={faWhatsappSquare} />;
  }
  if (icon === 'Whmcs') {
    return <FontAwesomeIcon icon={faWhmcs} />;
  }
  if (icon === 'WikipediaW') {
    return <FontAwesomeIcon icon={faWikipediaW} />;
  }
  if (icon === 'Windows') {
    return <FontAwesomeIcon icon={faWindows} />;
  }
  if (icon === 'Wix') {
    return <FontAwesomeIcon icon={faWix} />;
  }
  if (icon === 'WizardsOfTheCoast') {
    return <FontAwesomeIcon icon={faWizardsOfTheCoast} />;
  }
  if (icon === 'WolfPackBattalion') {
    return <FontAwesomeIcon icon={faWolfPackBattalion} />;
  }
  if (icon === 'Wordpress') {
    return <FontAwesomeIcon icon={faWordpress} />;
  }
  if (icon === 'WordpressSimple') {
    return <FontAwesomeIcon icon={faWordpressSimple} />;
  }
  if (icon === 'Wpbeginner') {
    return <FontAwesomeIcon icon={faWpbeginner} />;
  }
  if (icon === 'Wpexplorer') {
    return <FontAwesomeIcon icon={faWpexplorer} />;
  }
  if (icon === 'Wpforms') {
    return <FontAwesomeIcon icon={faWpforms} />;
  }
  if (icon === 'Wpressr') {
    return <FontAwesomeIcon icon={faWpressr} />;
  }
  if (icon === 'Xbox') {
    return <FontAwesomeIcon icon={faXbox} />;
  }
  if (icon === 'Xing') {
    return <FontAwesomeIcon icon={faXing} />;
  }
  if (icon === 'XingSquare') {
    return <FontAwesomeIcon icon={faXingSquare} />;
  }
  if (icon === 'YCombinator') {
    return <FontAwesomeIcon icon={faYCombinator} />;
  }
  if (icon === 'Yahoo') {
    return <FontAwesomeIcon icon={faYahoo} />;
  }
  if (icon === 'Yammer') {
    return <FontAwesomeIcon icon={faYammer} />;
  }
  if (icon === 'Yandex') {
    return <FontAwesomeIcon icon={faYandex} />;
  }
  if (icon === 'YandexInternational') {
    return <FontAwesomeIcon icon={faYandexInternational} />;
  }
  if (icon === 'Yarn') {
    return <FontAwesomeIcon icon={faYarn} />;
  }
  if (icon === 'Yelp') {
    return <FontAwesomeIcon icon={faYelp} />;
  }
  if (icon === 'Yoast') {
    return <FontAwesomeIcon icon={faYoast} />;
  }
  if (icon === 'Youtube') {
    return <FontAwesomeIcon icon={faYoutube} />;
  }
  if (icon === 'YoutubeSquare') {
    return <FontAwesomeIcon icon={faYoutubeSquare} />;
  }
  if (icon === 'Zhihu') {
    return <FontAwesomeIcon icon={faZhihu} />;
  }
}
