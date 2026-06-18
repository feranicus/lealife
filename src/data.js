// ============================================================
//  תוכן התוכנית — תלת-לשוני (עברית / English / Русский)
//  DLE / זאבת עורית · חומר חינוכי בלבד
//  כל שדה טקסט הוא אובייקט { he, en, ru }. רכיב App בוחר שפה.
// ============================================================

export const PHASES = [
  { cls: 'p1',
    n: { he: `שלב א · שבועות 1–3`, en: `Phase 1 · Weeks 1–3`, ru: `Этап 1 · Недели 1–3` },
    d: { he: `יסוד — הגנה ועצירת הטריגרים`, en: `Foundation — protection & stopping triggers`, ru: `Основа — защита и устранение триггеров` } },
  { cls: 'p2',
    n: { he: `שלב ב · שבועות 4–6`, en: `Phase 2 · Weeks 4–6`, ru: `Этап 2 · Недели 4–6` },
    d: { he: `תיקון מבפנים — תזונה אנטי-דלקתית`, en: `Repair from within — anti-inflammatory nutrition`, ru: `Восстановление изнутри — противовоспалительное питание` } },
  { cls: 'p3',
    n: { he: `שלב ג · שבועות 7–9`, en: `Phase 3 · Weeks 7–9`, ru: `Этап 3 · Недели 7–9` },
    d: { he: `נוגדי חמצון, פירות יער ותוספים`, en: `Antioxidants, berries & supplements`, ru: `Антиоксиданты, ягоды и добавки` } },
  { cls: 'p4',
    n: { he: `שלב ד · שבועות 10–12`, en: `Phase 4 · Weeks 10–12`, ru: `Этап 4 · Недели 10–12` },
    d: { he: `גוף-נפש, עור וקיימוּת`, en: `Body-mind, skin & sustainability`, ru: `Тело-разум, кожа и устойчивость` } },
]
export const WEEKS = [
  {
    n: 1, color: 'teal', phase: 1,
    theme: {
      he: `הגנה מהשמש — הטיפול היחיד החשוב ביותר`,
      en: `Sun protection — the single most important treatment`,
      ru: `Защита от солнца — самое важное лечение`,
    },
    focus: {
      he: `פוטופרוטקציה כבסיס הכול`,
      en: `Photoprotection as the foundation of everything`,
      ru: `Фотозащита как основа всего`,
    },
    why: {
      he: `בזאבת עורית, קרינת UV אינה "מחמירה את העור" באופן כללי — היא הטריגר הביולוגי הישיר של הנגעים. אור על-סגול גורם לתאי עור (קרטינוציטים) לעבור מוות תאי (אפופטוזיס), ובתהליך נחשפים רכיבים מתוך גרעין התא. אצל אדם בריא הפסולת הזו מפונה בשקט; בזאבת מערכת החיסון מזהה אותה בטעות כ"אויב", יוצרת נוגדנים, מפעילה מסלול אינטרפרון מסוג I ומדליקה דלקת שמייצרת בדיוק את הרובד הטבעתי שאת רואה בתמונות. לכן הגנה מהשמש אינה קוסמטיקה אלא הורדה ישירה של הדלק שמזין את המחלה. זו גם הסיבה שהנגעים מופיעים באזורים חשופי-שמש (מצח, צוואר, כתף) ולא במקומות מכוסים. קרם הגנה רחב-טווח חוסם הן UVB והן UVA — וה-UVA הוא הקרן שחודרת זכוכית וענן, ולכן ההגנה נדרשת גם בימים מעוננים וגם ליד חלון או בנהיגה.`,
      en: `In cutaneous lupus, UV radiation does not "irritate the skin" in a general sense — it is the direct biological trigger of the lesions. Ultraviolet light causes skin cells (keratinocytes) to undergo cell death (apoptosis), and in the process components from the cell nucleus are exposed. In a healthy person this debris is cleared away quietly; in lupus the immune system mistakenly identifies it as an "enemy," produces antibodies, activates the type I interferon pathway and ignites inflammation that produces exactly the ring-shaped plaque you see in the photographs. Sun protection is therefore not cosmetic but a direct reduction of the fuel that feeds the disease. This is also why the lesions appear in sun-exposed areas (forehead, neck, shoulder) and not in covered places. A broad-spectrum sunscreen blocks both UVB and UVA — and UVA is the ray that penetrates glass and clouds, which is why protection is needed even on cloudy days, near a window, or while driving.`,
      ru: `При кожной волчанке УФ-излучение не "раздражает кожу" в общем смысле — оно является прямым биологическим триггером очагов поражения. Ультрафиолетовый свет заставляет клетки кожи (кератиноциты) подвергаться гибели (апоптозу), и в этом процессе обнажаются компоненты ядра клетки. У здорового человека этот клеточный мусор удаляется незаметно; при волчанке иммунная система ошибочно распознаёт его как "врага", вырабатывает антитела, активирует путь интерферона I типа и разжигает воспаление, которое и создаёт то самое кольцевидное поражение, которое вы видите на фотографиях. Поэтому защита от солнца — это не косметика, а прямое снижение того топлива, которое питает болезнь. Именно поэтому очаги появляются на участках, открытых солнцу (лоб, шея, плечо), а не на закрытых местах. Солнцезащитный крем широкого спектра блокирует как UVB, так и UVA — а UVA — это лучи, которые проникают сквозь стекло и облака, поэтому защита нужна и в пасмурные дни, и у окна, и за рулём.`,
    },
    tasks: [
      {
        he: `לקנות קרם הגנה רחב-טווח SPF 50+ עם הגנת UVA (מומלץ עם תחמוצת אבץ / טיטניום)`,
        en: `Buy a broad-spectrum SPF 50+ sunscreen with UVA protection (preferably with zinc oxide / titanium)`,
        ru: `Купить солнцезащитный крем широкого спектра SPF 50+ с защитой от UVA (предпочтительно с оксидом цинка / титана)`,
      },
      {
        he: `למרוח כל בוקר על כל אזור חשוף — גם בימים מעוננים, גם בבית ליד חלון`,
        en: `Apply every morning to every exposed area — even on cloudy days, even at home near a window`,
        ru: `Наносить каждое утро на все открытые участки — даже в пасмурные дни, даже дома у окна`,
      },
      {
        he: `לחדש מריחה כל שעתיים-שלוש בחוץ, וכובע רחב-שוליים בשעות השיא`,
        en: `Reapply every two to three hours outdoors, and wear a wide-brimmed hat during peak hours`,
        ru: `Обновлять нанесение каждые два-три часа на улице и носить шляпу с широкими полями в часы пиковой активности солнца`,
      },
      {
        he: `להוריד מהטלפון אפליקציית מדד UV ולהימנע מחשיפה בין 10:00–16:00`,
        en: `Download a UV index app to your phone and avoid exposure between 10:00–16:00`,
        ru: `Скачать на телефон приложение с индексом UV и избегать пребывания на солнце с 10:00 до 16:00`,
      },
    ],
    tip: {
      he: `SPF 50+ · UVA · אבץ`,
      en: `SPF 50+ · UVA · zinc`,
      ru: `SPF 50+ · UVA · цинк`,
    },
  },
  {
    n: 2, color: 'teal', phase: 1,
    theme: {
      he: `הפסקת עישון ומיפוי טריגרים`,
      en: `Quitting smoking and mapping triggers`,
      ru: `Отказ от курения и выявление триггеров`,
    },
    focus: {
      he: `להסיר את מה שמכבה את הטיפול`,
      en: `Remove what cancels out the treatment`,
      ru: `Устранить то, что сводит лечение на нет`,
    },
    why: {
      he: `עישון פוגע בזאבת בשני מישורים. ראשית, רכיבים בעשן (ובהם תרכובות ארומטיות) מגבירים סטרס חמצוני ודלקת ומחריפים את הנגעים העוריים באופן ישיר. שנית — וזה מפתיע רבים — עישון מפחית באופן מובהק את היעילות של הידרוקסיכלורוקין (פלאקוניל), התרופה שהיא קו ראשון בזאבת עורית. כלומר מטופלת מעשנת עלולה לקבל את התרופה הנכונה ולא להגיב, רק בגלל העישון. לצד זה כדאי למפות טריגרים אישיים: חשיפת שמש, מתח נפשי, חוסר שינה, זיהומים, ולעיתים תרופות מסוימות. ניהול יומן קצר חושף דפוסים — לרוב מגלים שהתפרצות באה כמה ימים אחרי חשיפה לשמש או תקופת לחץ, וזה מאפשר להקדים ולמנוע.`,
      en: `Smoking harms lupus on two levels. First, components in the smoke (including aromatic compounds) increase oxidative stress and inflammation and worsen the skin lesions directly. Second — and this surprises many people — smoking significantly reduces the effectiveness of hydroxychloroquine (Plaquenil), the first-line medication in cutaneous lupus. In other words, a patient who smokes may receive the correct medication and fail to respond, simply because of the smoking. Alongside this, it is worth mapping your personal triggers: sun exposure, mental stress, lack of sleep, infections, and sometimes certain medications. Keeping a short journal reveals patterns — most often you discover that a flare comes a few days after sun exposure or a stressful period, and this allows you to anticipate and prevent it.`,
      ru: `Курение вредит при волчанке на двух уровнях. Во-первых, компоненты дыма (включая ароматические соединения) усиливают окислительный стресс и воспаление и напрямую усугубляют кожные очаги. Во-вторых — и это многих удивляет — курение значимо снижает эффективность гидроксихлорохина (Плаквенил), препарата первой линии при кожной волчанке. То есть курящая пациентка может получать правильный препарат и не реагировать на него лишь из-за курения. Наряду с этим стоит выявить личные триггеры: пребывание на солнце, психическое напряжение, недостаток сна, инфекции, а иногда и определённые лекарства. Ведение короткого дневника выявляет закономерности — чаще всего обнаруживается, что обострение наступает через несколько дней после пребывания на солнце или периода стресса, и это позволяет предвидеть и предотвратить его.`,
    },
    tasks: [
      {
        he: `אם את מעשנת — להתחיל תוכנית גמילה (זה כנראה הצעד היחיד החזק ביותר אחרי הגנת שמש)`,
        en: `If you smoke — begin a cessation program (this is probably the single most powerful step after sun protection)`,
        ru: `Если вы курите — начните программу отказа от курения (это, вероятно, самый сильный шаг после защиты от солнца)`,
      },
      {
        he: `לפתוח "יומן עור" פשוט: לצלם נגע פעיל פעם בשבוע באותו אור ואותה זווית`,
        en: `Start a simple "skin journal": photograph an active lesion once a week in the same light and from the same angle`,
        ru: `Завести простой "дневник кожи": фотографировать активный очаг раз в неделю при одинаковом освещении и под одинаковым углом`,
      },
      {
        he: `לרשום כל יום: חשיפת שמש, שעות שינה, רמת מתח (1–5), והאם יש צריבה`,
        en: `Record daily: sun exposure, hours of sleep, stress level (1–5), and whether there is any burning sensation`,
        ru: `Записывать каждый день: пребывание на солнце, часы сна, уровень стресса (1–5) и наличие жжения`,
      },
      {
        he: `לזהות 2–3 טריגרים אישיים חוזרים ולתכנן איך להקדים אותם`,
        en: `Identify 2–3 recurring personal triggers and plan how to get ahead of them`,
        ru: `Выявить 2–3 повторяющихся личных триггера и спланировать, как их опередить`,
      },
    ],
    tip: {
      he: `גמילה מעלה תגובה לטיפול`,
      en: `Quitting improves response to treatment`,
      ru: `Отказ от курения улучшает ответ на лечение`,
    },
  },
  {
    n: 3, color: 'teal', phase: 1,
    theme: {
      he: `ויטמין D — בדיקה ותיקון חוסר`,
      en: `Vitamin D — testing and correcting deficiency`,
      ru: `Витамин D — анализ и коррекция дефицита`,
    },
    focus: {
      he: `לסגור חוסר נפוץ ומשמעותי`,
      en: `Close a common and significant deficiency`,
      ru: `Восполнить распространённый и значимый дефицит`,
    },
    why: {
      he: `חוסר בוויטמין D נפוץ במיוחד בזאבת — בין השאר כי המטופלות (בצדק) נמנעות משמש, והעור הוא המקור העיקרי לייצורו. אבל ויטמין D אינו רק "לעצמות": הוא מאפנן חיסוני אמיתי. הוא מרסן תאי T מסוג Th17 הפרו-דלקתיים, מחזק תאי T-רגולטוריים שמרגיעים את התגובה החיסונית, ומוריד את חתימת האינטרפרון המעורבת בזאבת. מחקרים ומטא-אנליזות הראו שתיקון החוסר קשור לירידה במדד פעילות המחלה (SLEDAI), ומחקר גדול (VITAL) רמז שנטילת ויטמין D לאורך שנים עשויה להפחית הופעת מחלות אוטואימוניות. החשוב: זה תוסף "מרגיע" ולא "מגרה" את החיסון — ולכן בטוח ומבוקר בזאבת, בניגוד לתוספים "מחזקי חיסון" שמסוכנים כאן. את המינון יש לכוון לפי בדיקת דם (25-OH-Vitamin D) ולשאוף לרמה תקינה-גבוהה, בליווי רופא.`,
      en: `Vitamin D deficiency is especially common in lupus — partly because patients (rightly) avoid the sun, and the skin is the main source of its production. But vitamin D is not only "for bones": it is a genuine immune modulator. It restrains pro-inflammatory Th17 cells, strengthens regulatory T cells that calm the immune response, and lowers the interferon signature involved in lupus. Studies and meta-analyses have shown that correcting the deficiency is associated with a decrease in the disease activity index (SLEDAI), and a large study (VITAL) suggested that taking vitamin D over years may reduce the onset of autoimmune diseases. The important point: this is a supplement that "calms" rather than "stimulates" the immune system — and is therefore safe and well-controlled in lupus, unlike "immune-boosting" supplements that are dangerous here. The dose should be tailored according to a blood test (25-OH-Vitamin D), aiming for a normal-to-high level, under a physician's guidance.`,
      ru: `Дефицит витамина D особенно распространён при волчанке — отчасти потому, что пациентки (справедливо) избегают солнца, а кожа является основным источником его выработки. Но витамин D нужен не только "для костей": это настоящий иммуномодулятор. Он сдерживает провоспалительные клетки Th17, укрепляет регуляторные T-клетки, успокаивающие иммунный ответ, и снижает интерфероновую сигнатуру, участвующую в волчанке. Исследования и метаанализы показали, что коррекция дефицита связана со снижением индекса активности заболевания (SLEDAI), а крупное исследование (VITAL) указало, что приём витамина D на протяжении лет может уменьшать развитие аутоиммунных заболеваний. Важно: это добавка, которая "успокаивает", а не "стимулирует" иммунитет, — и поэтому безопасна и контролируема при волчанке, в отличие от "укрепляющих иммунитет" добавок, которые здесь опасны. Дозу следует подбирать по анализу крови (25-OH-Vitamin D), стремясь к нормально-высокому уровню, под наблюдением врача.`,
    },
    tasks: [
      {
        he: `לבקש מהרופא בדיקת דם של 25-OH ויטמין D`,
        en: `Ask your physician for a 25-OH vitamin D blood test`,
        ru: `Попросить врача назначить анализ крови на 25-OH витамин D`,
      },
      {
        he: `להתחיל ויטמין D3 לפי הרמה בבדיקה (לרוב 1000–2000 יחב"ל ליום לתחזוקה; מינון תיקון לפי רופא)`,
        en: `Start vitamin D3 according to the level in the test (usually 1000–2000 IU per day for maintenance; correction dose per physician)`,
        ru: `Начать приём витамина D3 в соответствии с уровнем в анализе (обычно 1000–2000 МЕ в день для поддержания; корректирующая доза по назначению врача)`,
      },
      {
        he: `לשקול שילוב ויטמין K2 לתמיכה בניתוב הסידן (ראי כרטיס התוסף)`,
        en: `Consider adding vitamin K2 to support the routing of calcium (see the supplement card)`,
        ru: `Рассмотреть добавление витамина K2 для поддержки направления кальция (см. карточку добавки)`,
      },
      {
        he: `לבדוק שוב את הרמה בעוד ~3 חודשים ולכייל`,
        en: `Re-check the level in about 3 months and adjust`,
        ru: `Повторно проверить уровень примерно через 3 месяца и скорректировать дозу`,
      },
    ],
    tip: {
      he: `מאפנן חיסון — לא "מגרה"`,
      en: `Immune modulator — not a "stimulant"`,
      ru: `Иммуномодулятор — не "стимулятор"`,
    },
  },
  {
    n: 4, color: 'gold', phase: 2,
    theme: {
      he: `אומגה-3 — שמן דגים נכנס לתפריט`,
      en: `Omega-3 — fish oil enters the menu`,
      ru: `Омега-3 — рыбий жир входит в рацион`,
    },
    focus: {
      he: `לכוון את האיזון הדלקתי`,
      en: `Tune the inflammatory balance`,
      ru: `Настроить воспалительный баланс`,
    },
    why: {
      he: `הגוף בונה מולקולות איתות דלקתיות מחומצות שומן. אומגה-6 (נפוצה בשמנים מעובדים ומזון מתועש) מזינה מסלולים פרו-דלקתיים, בעוד אומגה-3 (EPA/DHA מדגים) מזינה מולקולות מרגיעות-דלקת ואף "ממיסי-דלקת" פעילים (רזולווינים) שמסיימים תהליך דלקתי בצורה מסודרת. בתזונה מערבית טיפוסית היחס מוטה מאוד לאומגה-6, וזה שומר את הגוף במצב דלקתי כרוני שקט. בזאבת, ניסויים קליניים הראו שתוסף אומגה-3 הוריד מדדי דלקת (CRP, ESR), שיפר מדדי פעילות מחלה, ובחלק מהעבודות אף שיפר ממצאים עוריים בזאבת עורית. זה לא תחליף לתרופה — אבל זה כלי תזונתי עם בסיס מחקרי אמיתי שמושך את כל המערכת לכיוון פחות דלקתי.`,
      en: `The body builds inflammatory signaling molecules from fatty acids. Omega-6 (common in processed oils and industrial food) feeds pro-inflammatory pathways, while omega-3 (EPA/DHA from fish) feeds inflammation-calming molecules and even active "inflammation-resolving" molecules (resolvins) that bring an inflammatory process to an orderly close. In a typical Western diet the ratio is heavily skewed toward omega-6, which keeps the body in a quiet chronic inflammatory state. In lupus, clinical trials have shown that an omega-3 supplement lowered inflammatory markers (CRP, ESR), improved disease activity measures, and in some studies even improved skin findings in cutaneous lupus. This is not a substitute for medication — but it is a dietary tool with a genuine research basis that pulls the whole system toward a less inflammatory direction.`,
      ru: `Организм строит воспалительные сигнальные молекулы из жирных кислот. Омега-6 (распространена в переработанных маслах и промышленной пище) питает провоспалительные пути, тогда как омега-3 (EPA/DHA из рыбы) питает противовоспалительные молекулы и даже активные "разрешающие воспаление" молекулы (резолвины), которые упорядоченно завершают воспалительный процесс. В типичном западном рационе соотношение сильно смещено в сторону омега-6, что удерживает организм в состоянии тихого хронического воспаления. При волчанке клинические испытания показали, что добавка омега-3 снижала маркеры воспаления (CRP, ESR), улучшала показатели активности заболевания, а в некоторых работах даже улучшала состояние кожи при кожной волчанке. Это не замена лекарства — но это диетический инструмент с реальной научной базой, который смещает всю систему в менее воспалительном направлении.`,
    },
    tasks: [
      {
        he: `להוסיף 2–3 מנות דג שמן בשבוע (סלמון, סרדינים, מקרל, הרינג)`,
        en: `Add 2–3 servings of oily fish per week (salmon, sardines, mackerel, herring)`,
        ru: `Добавить 2–3 порции жирной рыбы в неделю (лосось, сардины, скумбрия, сельдь)`,
      },
      {
        he: `להתחיל תוסף אומגה-3 איכותי (כ-1000–2000 מ"ג EPA+DHA ליום, לפי רופא)`,
        en: `Start a quality omega-3 supplement (about 1000–2000 mg EPA+DHA per day, per physician)`,
        ru: `Начать приём качественной добавки омега-3 (около 1000–2000 мг EPA+DHA в день, по назначению врача)`,
      },
      {
        he: `להפחית שמנים צמחיים מעובדים (חמניות, תירס, סויה) לטובת שמן זית`,
        en: `Reduce processed vegetable oils (sunflower, corn, soy) in favor of olive oil`,
        ru: `Сократить переработанные растительные масла (подсолнечное, кукурузное, соевое) в пользу оливкового масла`,
      },
      {
        he: `לבדוק שהתוסף עבר טיהור ממתכות כבדות (TG-form, IFOS/חותם איכות)`,
        en: `Check that the supplement has been purified of heavy metals (TG-form, IFOS / quality seal)`,
        ru: `Убедиться, что добавка очищена от тяжёлых металлов (форма TG, IFOS / знак качества)`,
      },
    ],
    tip: {
      he: `EPA+DHA · ממיסי-דלקת`,
      en: `EPA+DHA · inflammation-resolving`,
      ru: `EPA+DHA · разрешающие воспаление`,
    },
  },
  {
    n: 5, color: 'gold', phase: 2,
    theme: {
      he: `בסיס ים-תיכוני אנטי-דלקתי`,
      en: `An anti-inflammatory Mediterranean base`,
      ru: `Противовоспалительная средиземноморская основа`,
    },
    focus: {
      he: `התבנית התזונתית עם הכי הרבה ראיות`,
      en: `The dietary pattern with the most evidence`,
      ru: `Модель питания с наибольшей доказательной базой`,
    },
    why: {
      he: `אין "דיאטת זאבת" רשמית, אך התבנית עם התמיכה המחקרית הרחבה ביותר למחלות דלקתיות-אוטואימוניות היא הים-תיכונית: שפע ירקות ועלים ירוקים, קטניות, דגנים מלאים, שמן זית כבסיס שומן, דגים, אגוזים ופירות — ומעט בשר אדום, מזון מעובד וסוכר. הכוח שלה אינו ברכיב בודד אלא בשילוב: סיבים שמזינים חיידקי מעי "טובים" שמייצרים חומצות שומן קצרות-שרשרת מרגיעות-חיסון; פוליפנולים מצמחים שמורידים סטרס חמצוני; ושומן חד-בלתי-רווי שמייצב ממברנות. במקביל היא מפחיתה את מה שמלבה דלקת — סוכר פשוט, פחמימות מזוקקות ושומן טראנס. זו לא "הגבלה" אלא החלפה: ככל שהצלחת צבעונית ומגוונת יותר, כך מגוון נוגדי-החמצון רחב יותר.`,
      en: `There is no official "lupus diet," but the pattern with the broadest research support for inflammatory-autoimmune diseases is the Mediterranean one: an abundance of vegetables and leafy greens, legumes, whole grains, olive oil as the fat base, fish, nuts and fruit — and little red meat, processed food and sugar. Its strength lies not in a single component but in the combination: fiber that feeds "good" gut bacteria which produce immune-calming short-chain fatty acids; plant polyphenols that lower oxidative stress; and monounsaturated fat that stabilizes membranes. At the same time it reduces what fans inflammation — simple sugar, refined carbohydrates and trans fat. This is not a "restriction" but a substitution: the more colorful and varied your plate, the broader the range of antioxidants.`,
      ru: `Официальной "диеты при волчанке" не существует, но модель с наиболее широкой научной поддержкой при воспалительно-аутоиммунных заболеваниях — средиземноморская: изобилие овощей и зелени, бобовые, цельные злаки, оливковое масло как основа жиров, рыба, орехи и фрукты — и мало красного мяса, переработанной пищи и сахара. Её сила не в одном компоненте, а в сочетании: клетчатка, питающая "хорошие" кишечные бактерии, которые вырабатывают успокаивающие иммунитет короткоцепочечные жирные кислоты; растительные полифенолы, снижающие окислительный стресс; и мононенасыщенный жир, стабилизирующий мембраны. Одновременно она сокращает то, что разжигает воспаление, — простой сахар, рафинированные углеводы и трансжиры. Это не "ограничение", а замена: чем красочнее и разнообразнее тарелка, тем шире спектр антиоксидантов.`,
    },
    tasks: [
      {
        he: `לבנות צלחת לפי הכלל: חצי ירקות/עלים, רבע חלבון איכותי, רבע דגן מלא/קטנייה`,
        en: `Build your plate by the rule: half vegetables/greens, a quarter quality protein, a quarter whole grain/legume`,
        ru: `Составлять тарелку по правилу: половина — овощи/зелень, четверть — качественный белок, четверть — цельный злак/бобовые`,
      },
      {
        he: `להחליף חמאה/מרגרינה ושמנים מעובדים בשמן זית כתית מעולה`,
        en: `Replace butter/margarine and processed oils with extra virgin olive oil`,
        ru: `Заменить сливочное масло/маргарин и переработанные масла оливковым маслом первого холодного отжима`,
      },
      {
        he: `להפחית סוכר ופחמימות מזוקקות (לחם לבן, מאפים, משקאות ממותקים)`,
        en: `Reduce sugar and refined carbohydrates (white bread, pastries, sweetened drinks)`,
        ru: `Сократить сахар и рафинированные углеводы (белый хлеб, выпечка, подслащённые напитки)`,
      },
      {
        he: `להוסיף עלים ירוקים כהים מדי יום וקטניות 3–4 פעמים בשבוע`,
        en: `Add dark leafy greens daily and legumes 3–4 times a week`,
        ru: `Добавлять тёмную листовую зелень ежедневно и бобовые 3–4 раза в неделю`,
      },
    ],
    tip: {
      he: `צבעוני = מגוון נוגדי-חמצון`,
      en: `Colorful = a variety of antioxidants`,
      ru: `Красочно = разнообразие антиоксидантов`,
    },
  },
  {
    n: 6, color: 'gold', phase: 2,
    theme: {
      he: `בריאות המעי והסיבים`,
      en: `Gut health and fiber`,
      ru: `Здоровье кишечника и клетчатка`,
    },
    focus: {
      he: `ציר המעי–חיסון`,
      en: `The gut–immune axis`,
      ru: `Ось кишечник–иммунитет`,
    },
    why: {
      he: `כ-70% מהמערכת החיסונית יושבת סביב המעי, ויש קשר מבוסס בין הרכב חיידקי המעי (מיקרוביום) לפעילות מחלות אוטואימוניות, כולל זאבת. סיבים תזונתיים הם "מזון" לחיידקים המועילים; כשהם מתסיסים סיבים הם מייצרים חומצות שומן קצרות-שרשרת (כמו בוטיראט) שמחזקות את מחסום המעי ומרגיעות תאי חיסון. מחסום מעי חזק מונע "דליפה" של רכיבים דרך דופן המעי שעלולה ללבות את החיסון. לכן מגוון רחב של מקורות סיבים — קטניות, ירקות, שיבולת שועל, זרעי פשתן וצ'יה — חשוב יותר מכמות בלבד. נקודה קריטית לשבועות הבאים: דיאטות דלות-פחמימה כמו קטו עלולות לרדת מאוד בסיבים, וזה אחד החסרונות המרכזיים שלהן — לכן אם בוחרים בכיוון כזה, חייבים לשמור על ירקות-סיביים בשפע.`,
      en: `About 70% of the immune system resides around the gut, and there is a well-established link between the composition of gut bacteria (microbiome) and the activity of autoimmune diseases, including lupus. Dietary fiber is "food" for the beneficial bacteria; when they ferment fiber they produce short-chain fatty acids (such as butyrate) that strengthen the gut barrier and calm immune cells. A strong gut barrier prevents the "leakage" of components through the intestinal wall that could fan the immune response. Therefore a wide variety of fiber sources — legumes, vegetables, oats, flaxseed and chia — is more important than quantity alone. A critical point for the coming weeks: low-carbohydrate diets such as keto may drop very low in fiber, and this is one of their main drawbacks — so if you choose such a direction, you must keep an abundance of fiber-rich vegetables.`,
      ru: `Около 70% иммунной системы расположено вокруг кишечника, и существует доказанная связь между составом кишечных бактерий (микробиомом) и активностью аутоиммунных заболеваний, включая волчанку. Пищевая клетчатка — это "пища" для полезных бактерий; ферментируя клетчатку, они вырабатывают короткоцепочечные жирные кислоты (например, бутират), которые укрепляют кишечный барьер и успокаивают иммунные клетки. Крепкий кишечный барьер предотвращает "просачивание" компонентов через стенку кишечника, способное разжечь иммунный ответ. Поэтому широкое разнообразие источников клетчатки — бобовые, овощи, овёс, семена льна и чиа — важнее, чем одно лишь количество. Критический момент на ближайшие недели: низкоуглеводные диеты, такие как кето, могут быть очень бедны клетчаткой, и это один из их основных недостатков — поэтому, если вы выбираете такое направление, необходимо сохранять обилие богатых клетчаткой овощей.`,
    },
    tasks: [
      {
        he: `להגיע בהדרגה ל-25–35 גרם סיבים ביום ממקורות מגוונים`,
        en: `Gradually reach 25–35 grams of fiber per day from varied sources`,
        ru: `Постепенно довести до 25–35 граммов клетчатки в день из разнообразных источников`,
      },
      {
        he: `להוסיף מקור מותסס יומי קטן (יוגורט/קפיר חי, כרוב כבוש, מיסו) אם מתאים לך`,
        en: `Add a small daily fermented source (live yogurt/kefir, sauerkraut, miso) if it suits you`,
        ru: `Добавить небольшой ежедневный ферментированный источник (живой йогурт/кефир, квашеная капуста, мисо), если это вам подходит`,
      },
      {
        he: `כף זרעי פשתן טחונים או צ'יה ביום — סיבים + אומגה-3 צמחית`,
        en: `A tablespoon of ground flaxseed or chia per day — fiber + plant-based omega-3`,
        ru: `Столовая ложка молотых семян льна или чиа в день — клетчатка + растительная омега-3`,
      },
      {
        he: `לשתות מספיק מים — סיבים בלי מים עלולים להכביד`,
        en: `Drink enough water — fiber without water can be hard on the system`,
        ru: `Пить достаточно воды — клетчатка без воды может перегружать кишечник`,
      },
    ],
    tip: {
      he: `70% מהחיסון סביב המעי`,
      en: `70% of immunity is around the gut`,
      ru: `70% иммунитета — вокруг кишечника`,
    },
  },
  {
    n: 7, color: 'berry', phase: 3,
    theme: {
      he: `פירות יער — תחנת הכוח של נוגדי החמצון`,
      en: `Berries — the powerhouse of antioxidants`,
      ru: `Ягоды — электростанция антиоксидантов`,
    },
    focus: {
      he: `אובלפיחה, חמוציות ומשפחת הברי`,
      en: `Sea buckthorn, cranberries and the berry family`,
      ru: `Облепиха, клюква и семейство ягод`,
    },
    why: {
      he: `הנזק בזאבת עורית מונע בחלקו מסטרס חמצוני — עודף רדיקלים חופשיים שפוגעים בתאי עור ומלבים דלקת, במיוחד אחרי חשיפת UV. פירות יער הם מהמקורות המרוכזים ביותר של פוליפנולים ואנתוציאנינים — אותם פיגמנטים אדומים-סגולים-כהים שהם נוגדי-חמצון רבי-עוצמה ומולקולות אנטי-דלקתיות. אובלפיחה (אשחר מצוי / Sea Buckthorn) בולטת במיוחד: היא עשירה בוויטמין C, קרוטנואידים, ובאומגה-7 (חומצה פלמיטולאית) הנדירה שתומכת ישירות בריפוי וברסטורציה של רקמת עור וריריות ובחיזוק מחסום העור. חמוציות מוסיפות פרואנתוציאנידינים שתורמים גם למניעת זיהומי שתן (רלוונטי במיוחד למי שנוטלת תרופות מדכאות-חיסון). אוכמניות, רימון וארוניה (אשחר שחור) משלימים פרופיל רחב. החשוב: כאן ה"כוח" הוא נוגד-חמצון ולא "מגרה-חיסון" — ולכן פירות יער בטוחים ומועילים בזאבת.`,
      en: `The damage in cutaneous lupus is driven in part by oxidative stress — an excess of free radicals that harm skin cells and fan inflammation, especially after UV exposure. Berries are among the most concentrated sources of polyphenols and anthocyanins — those red-purple-dark pigments that are powerful antioxidants and anti-inflammatory molecules. Sea buckthorn (Hippophae / Sea Buckthorn) stands out in particular: it is rich in vitamin C, carotenoids, and the rare omega-7 (palmitoleic acid) that directly supports the healing and restoration of skin and mucosal tissue and the strengthening of the skin barrier. Cranberries add proanthocyanidins that also help prevent urinary tract infections (especially relevant for anyone taking immunosuppressive medications). Blueberries, pomegranate and aronia (black chokeberry) complete a broad profile. The important point: here the "power" is antioxidant and not "immune-stimulating" — and so berries are safe and beneficial in lupus.`,
      ru: `Повреждение при кожной волчанке отчасти обусловлено окислительным стрессом — избытком свободных радикалов, повреждающих клетки кожи и разжигающих воспаление, особенно после воздействия УФ. Ягоды — одни из самых концентрированных источников полифенолов и антоцианов — тех красно-фиолетово-тёмных пигментов, которые являются мощными антиоксидантами и противовоспалительными молекулами. Особенно выделяется облепиха (Hippophae / Sea Buckthorn): она богата витамином C, каротиноидами и редкой омега-7 (пальмитолеиновой кислотой), которая напрямую поддерживает заживление и восстановление тканей кожи и слизистых и укрепление кожного барьера. Клюква добавляет проантоцианидины, которые также помогают предотвращать инфекции мочевыводящих путей (особенно актуально для тех, кто принимает иммуносупрессивные препараты). Черника, гранат и арония (черноплодная рябина) дополняют широкий профиль. Важно: здесь "сила" — антиоксидантная, а не "стимулирующая иммунитет", — поэтому ягоды безопасны и полезны при волчанке.`,
    },
    tasks: [
      {
        he: `להוסיף חופן פירות יער ביום (טריים או קפואים — הקפאה שומרת על האנתוציאנינים)`,
        en: `Add a handful of berries a day (fresh or frozen — freezing preserves the anthocyanins)`,
        ru: `Добавлять горсть ягод в день (свежих или замороженных — заморозка сохраняет антоцианы)`,
      },
      {
        he: `לשלב אובלפיחה (מיץ/פירה/שמן) — מקור ייחודי לאומגה-7 וויטמין C`,
        en: `Incorporate sea buckthorn (juice/purée/oil) — a unique source of omega-7 and vitamin C`,
        ru: `Включить облепиху (сок/пюре/масло) — уникальный источник омега-7 и витамина C`,
      },
      {
        he: `כוס חמוציות לא-ממותקות בשבוע, או תוסף חמוצית מרוכז (ראי כרטיס)`,
        en: `A cup of unsweetened cranberries a week, or a concentrated cranberry supplement (see card)`,
        ru: `Стакан неподслащённой клюквы в неделю или концентрированную добавку клюквы (см. карточку)`,
      },
      {
        he: `לגוון: אוכמניות, פטל, רימון, ארוניה — כל צבע = משפחת נוגדי-חמצון אחרת`,
        en: `Vary it: blueberries, raspberries, pomegranate, aronia — each color = a different family of antioxidants`,
        ru: `Разнообразить: черника, малина, гранат, арония — каждый цвет = другое семейство антиоксидантов`,
      },
    ],
    tip: {
      he: `אנתוציאנינים · אומגה-7`,
      en: `Anthocyanins · omega-7`,
      ru: `Антоцианы · омега-7`,
    },
  },
  {
    n: 8, color: 'berry', phase: 3,
    theme: {
      he: `כורכומין, תבלינים ופוליפנולים`,
      en: `Curcumin, spices and polyphenols`,
      ru: `Куркумин, специи и полифенолы`,
    },
    focus: {
      he: `אנטי-דלקת מהמטבח`,
      en: `Anti-inflammation from the kitchen`,
      ru: `Противовоспаление с кухни`,
    },
    why: {
      he: `כורכומין, החומר הפעיל בכורכום, הוא אחד הפוליפנולים הנחקרים ביותר בזאבת. במודלים ובניסויים קליניים קטנים הוא הפחית סמני דלקת (כולל IL-6 ו-anti-dsDNA) דרך עיכוב מסלולים מרכזיים כמו NLRP3 inflammasome ו-NF-κB — אותם "מתגים" שמדליקים דלקת. החיסרון הטבעי שלו הוא ספיגה ירודה, ולכן צורות תוסף עם פיפרין (מפלפל שחור) או נשאים פוספוליפידיים נספגות הרבה יותר טוב. לצד הכורכום, תבלינים ועשבי תיבול כמו ג'ינג'ר, קינמון, אורגנו ורוזמרין עשירים בפוליפנולים אנטי-דלקתיים, והם דרך פשוטה "להעמיס" נוגדי-חמצון בלי קלוריות. שימי לב: תה ירוק כמשקה מתון בדרך כלל בסדר, אבל תמציות תה-ירוק במינון גבוה הן בין התוספים שעלולים להעמיס על הכבד ולעורר תגובה — לכן מהמטבח כן, מגה-מינון בכמוסה לא, ותמיד בהתייעצות.`,
      en: `Curcumin, the active compound in turmeric, is one of the most studied polyphenols in lupus. In models and small clinical trials it reduced inflammatory markers (including IL-6 and anti-dsDNA) by inhibiting central pathways such as the NLRP3 inflammasome and NF-κB — those "switches" that turn on inflammation. Its natural drawback is poor absorption, which is why supplement forms with piperine (from black pepper) or phospholipid carriers are absorbed much better. Alongside turmeric, spices and herbs such as ginger, cinnamon, oregano and rosemary are rich in anti-inflammatory polyphenols, and they are a simple way to "load up" on antioxidants without calories. Note: green tea as a moderate beverage is usually fine, but high-dose green tea extracts are among the supplements that can burden the liver and provoke a reaction — so from the kitchen yes, a mega-dose in a capsule no, and always after consultation.`,
      ru: `Куркумин, активное вещество куркумы, — один из наиболее изученных полифенолов при волчанке. В моделях и небольших клинических испытаниях он снижал маркеры воспаления (включая IL-6 и anti-dsDNA) за счёт ингибирования центральных путей, таких как NLRP3 inflammasome и NF-κB — тех "переключателей", которые включают воспаление. Его природный недостаток — плохое всасывание, поэтому формы добавок с пиперином (из чёрного перца) или фосфолипидными носителями всасываются гораздо лучше. Наряду с куркумой специи и пряные травы, такие как имбирь, корица, орегано и розмарин, богаты противовоспалительными полифенолами и являются простым способом "загрузиться" антиоксидантами без калорий. Обратите внимание: зелёный чай как умеренный напиток обычно безопасен, но высокодозовые экстракты зелёного чая входят в число добавок, способных нагружать печень и провоцировать реакцию, — поэтому с кухни да, мегадоза в капсуле нет, и всегда после консультации.`,
    },
    tasks: [
      {
        he: `להוסיף כורכום + פלפל שחור לבישול יומיומי (יחד עם שומן לספיגה)`,
        en: `Add turmeric + black pepper to everyday cooking (together with fat for absorption)`,
        ru: `Добавлять куркуму + чёрный перец в повседневную готовку (вместе с жиром для усвоения)`,
      },
      {
        he: `לשקול תוסף כורכומין עם פיפרין/פוספוליפיד (ראי כרטיס; להתייעץ אם נוטלים מדללי דם)`,
        en: `Consider a curcumin supplement with piperine/phospholipid (see card; consult if taking blood thinners)`,
        ru: `Рассмотреть добавку куркумина с пиперином/фосфолипидом (см. карточку; проконсультироваться при приёме антикоагулянтов)`,
      },
      {
        he: `לתבל בשפע: ג'ינג'ר, קינמון, רוזמרין, אורגנו, כורכום`,
        en: `Season generously: ginger, cinnamon, rosemary, oregano, turmeric`,
        ru: `Обильно приправлять: имбирь, корица, розмарин, орегано, куркума`,
      },
      {
        he: `תה ירוק כמשקה — מתון; להימנע מתמציות מרוכזות במינון גבוה`,
        en: `Green tea as a beverage — in moderation; avoid concentrated high-dose extracts`,
        ru: `Зелёный чай как напиток — умеренно; избегать концентрированных высокодозовых экстрактов`,
      },
    ],
    tip: {
      he: `כורכומין + פיפרין = ספיגה`,
      en: `Curcumin + piperine = absorption`,
      ru: `Куркумин + пиперин = усвоение`,
    },
  },
  {
    n: 9, color: 'berry', phase: 3,
    theme: {
      he: `גליקמי-נמוך, וקטו כאופציה ניסיונית`,
      en: `Low-glycemic, and keto as an experimental option`,
      ru: `Низкогликемическое питание и кето как экспериментальный вариант`,
    },
    focus: {
      he: `להוריד את "להבת הסוכר"`,
      en: `Lower the "sugar flame"`,
      ru: `Снизить "сахарное пламя"`,
    },
    why: {
      he: `סוכר ופחמימות מזוקקות יוצרים קפיצות אינסולין וסוכר שמלבות דלקת ומייצרות תוצרי גליקציה (AGEs) שפוגעים ברקמות. לכן מעבר לתזונה גליקמית-נמוכה — פחות סוכר ומזוקקים, יותר חלבון, שומן בריא וירקות — הוא צעד אנטי-דלקתי הגיוני ומבוסס. דיאטה קטוגנית (קטו) לוקחת את זה לקיצון: פחמימות נמוכות מאוד שמכניסות את הגוף לקטוזיס וייצור קטונים, ובהם בטא-הידרוקסי-בוטיראט (BHB) שמעכב את אותו NLRP3 inflammasome ובמודלים מפחית דלקת. יש עדויות מוקדמות מעודדות (כולל מחקר בדלקת מפרקים פסוריאטית, ועבודות ראשוניות בזאבת), ומטופלות מדווחות לעיתים על שיפור בעייפות וברשת העור. אבל — והאבל חשוב — הראיות בזאבת עדיין דלות וברובן אנקדוטליות; קטו עלולה להפחית סיבים (ולפגוע במעי), להעלות LDL ולהכביד על מערכת לב-וכלי-דם שגם ככה בסיכון מוגבר בזאבת. לכן הגישה האחראית: התחילי בגליקמי-נמוך כברירת מחדל, ואם רוצים לנסות קטו — רק כניסוי מבוקר, מוגבל בזמן, עם שפע ירקות ושומנים בריאים, ותחת מעקב רופא ובדיקות שומנים.`,
      en: `Sugar and refined carbohydrates create insulin and glucose spikes that fan inflammation and produce glycation end-products (AGEs) that damage tissues. Therefore moving to a low-glycemic diet — less sugar and refined carbs, more protein, healthy fat and vegetables — is a sensible and well-founded anti-inflammatory step. A ketogenic diet (keto) takes this to the extreme: very low carbohydrates that put the body into ketosis and the production of ketones, among them beta-hydroxybutyrate (BHB), which inhibits that same NLRP3 inflammasome and reduces inflammation in models. There is early encouraging evidence (including a study in psoriatic arthritis, and preliminary work in lupus), and patients sometimes report improvement in fatigue and in the skin lesions. But — and the "but" is important — the evidence in lupus is still sparse and mostly anecdotal; keto may reduce fiber (and harm the gut), raise LDL and burden the cardiovascular system, which is already at elevated risk in lupus. So the responsible approach is: start with low-glycemic as the default, and if you want to try keto — only as a controlled, time-limited experiment, with an abundance of vegetables and healthy fats, and under a physician's monitoring with lipid tests.`,
      ru: `Сахар и рафинированные углеводы создают скачки инсулина и глюкозы, которые разжигают воспаление и образуют конечные продукты гликирования (AGEs), повреждающие ткани. Поэтому переход на низкогликемическое питание — меньше сахара и рафинированных продуктов, больше белка, полезного жира и овощей — это разумный и обоснованный противовоспалительный шаг. Кетогенная диета (кето) доводит это до крайности: очень мало углеводов, что вводит организм в кетоз и выработку кетонов, среди которых бета-гидроксибутират (BHB), ингибирующий тот самый NLRP3 inflammasome и снижающий воспаление в моделях. Есть ранние обнадёживающие данные (включая исследование при псориатическом артрите и предварительные работы при волчанке), и пациентки иногда сообщают об улучшении усталости и состояния кожи. Но — и это "но" важно — доказательства при волчанке всё ещё скудны и в основном анекдотичны; кето может сокращать клетчатку (и вредить кишечнику), повышать LDL и нагружать сердечно-сосудистую систему, которая и без того находится в зоне повышенного риска при волчанке. Поэтому ответственный подход таков: начинать с низкогликемического питания по умолчанию, а если хочется попробовать кето — только как контролируемый, ограниченный по времени эксперимент, с обилием овощей и полезных жиров, под наблюдением врача и с анализами липидов.`,
    },
    tasks: [
      {
        he: `ברירת מחדל: תזונה גליקמית-נמוכה — להוריד סוכר, קמח לבן ומשקאות ממותקים`,
        en: `Default: a low-glycemic diet — reduce sugar, white flour and sweetened drinks`,
        ru: `По умолчанию: низкогликемическое питание — сократить сахар, белую муку и подслащённые напитки`,
      },
      {
        he: `לאזן כל ארוחה: חלבון + שומן בריא + ירקות סיביים כדי למתן קפיצות סוכר`,
        en: `Balance every meal: protein + healthy fat + fibrous vegetables to temper sugar spikes`,
        ru: `Балансировать каждый приём пищи: белок + полезный жир + богатые клетчаткой овощи, чтобы смягчить скачки сахара`,
      },
      {
        he: `אם שוקלים קטו — להגדיר כניסוי של 4–6 שבועות בלבד, עם בדיקת שומנים לפני ואחרי`,
        en: `If considering keto — define it as a trial of only 4–6 weeks, with a lipid test before and after`,
        ru: `Если рассматриваете кето — определить его как эксперимент всего на 4–6 недель, с анализом липидов до и после`,
      },
      {
        he: `בקטו: לשמור ירקות לא-עמילניים בשפע (סיבים!) ולהעדיף שומן זית/אבוקדו/דגים`,
        en: `On keto: keep non-starchy vegetables in abundance (fiber!) and prefer olive/avocado/fish fat`,
        ru: `На кето: сохранять обилие некрахмалистых овощей (клетчатка!) и предпочитать оливковый/авокадовый/рыбий жир`,
      },
    ],
    tip: {
      he: `גליקמי-נמוך קודם · קטו בזהירות`,
      en: `Low-glycemic first · keto with caution`,
      ru: `Сначала низкогликемическое · кето с осторожностью`,
    },
  },
  {
    n: 10, color: 'sky', phase: 4,
    theme: {
      he: `מתח, שינה ותנועה עדינה`,
      en: `Stress, sleep and gentle movement`,
      ru: `Стресс, сон и мягкое движение`,
    },
    focus: {
      he: `ציר העצבים–חיסון`,
      en: `The nervous–immune axis`,
      ru: `Ось нервная система–иммунитет`,
    },
    why: {
      he: `מתח נפשי אינו "בראש" — הוא ביוכימיה. לחץ כרוני מעלה קורטיזול ומפעיל את מערכת העצבים הסימפתטית בצורה שמשבשת את האיזון החיסוני ויכולה להצית התפרצויות זאבת. שינה לקויה עושה דבר דומה: היא מעלה סמני דלקת ומחמירה עייפות שכבר אופיינית למחלה. תנועה גופנית מתונה פועלת בכיוון ההפוך — היא מורידה דלקת בסיסית, משפרת מצב רוח ושינה, ומפחיתה עייפות, ובלבד שתהיה עדינה ולא מתישה (עומס יתר דווקא יכול להחמיר). המטרה בשבוע הזה היא לבנות "תשתית הרגעה" קבועה: שגרת שינה, כלי ויסות מתח יומי, ותנועה נעימה — שילוב שמוריד את רעש הרקע הדלקתי שעליו יושבת המחלה.`,
      en: `Mental stress is not "in your head" — it is biochemistry. Chronic stress raises cortisol and activates the sympathetic nervous system in a way that disrupts immune balance and can ignite lupus flares. Poor sleep does something similar: it raises inflammatory markers and worsens the fatigue that is already characteristic of the disease. Moderate physical activity works in the opposite direction — it lowers baseline inflammation, improves mood and sleep, and reduces fatigue, provided it is gentle and not exhausting (over-exertion can actually make things worse). The goal this week is to build a steady "calming infrastructure": a sleep routine, a daily stress-regulation tool, and pleasant movement — a combination that lowers the background inflammatory noise on which the disease sits.`,
      ru: `Психическое напряжение не "в голове" — это биохимия. Хронический стресс повышает кортизол и активирует симпатическую нервную систему так, что нарушается иммунный баланс и могут разгораться обострения волчанки. Плохой сон делает нечто похожее: он повышает маркеры воспаления и усугубляет усталость, которая и без того характерна для болезни. Умеренная физическая активность действует в обратном направлении — она снижает базовое воспаление, улучшает настроение и сон, уменьшает усталость, при условии что она мягкая и не изнуряющая (перегрузка, наоборот, может ухудшить состояние). Цель этой недели — выстроить устойчивую "инфраструктуру успокоения": режим сна, ежедневный инструмент регуляции стресса и приятное движение — сочетание, которое снижает фоновый воспалительный шум, на котором держится болезнь.`,
    },
    tasks: [
      {
        he: `לקבוע שעת שינה קבועה, ולכוון ל-7–9 שעות; חדר חשוך וקריר`,
        en: `Set a fixed bedtime, aiming for 7–9 hours; a dark and cool room`,
        ru: `Установить постоянное время отхода ко сну, стремясь к 7–9 часам; тёмная и прохладная комната`,
      },
      {
        he: `תרגול הרגעה יומי 10 דק' (נשימה, מיינדפולנס או יוגה עדינה)`,
        en: `A daily 10-minute calming practice (breathing, mindfulness or gentle yoga)`,
        ru: `Ежедневная 10-минутная практика расслабления (дыхание, осознанность или мягкая йога)`,
      },
      {
        he: `תנועה מתונה 20–30 דק', רוב ימות השבוע (הליכה, שחייה בצל, יוגה)`,
        en: `Moderate movement 20–30 minutes, most days of the week (walking, swimming in the shade, yoga)`,
        ru: `Умеренное движение 20–30 минут, большинство дней недели (ходьба, плавание в тени, йога)`,
      },
      {
        he: `להגן על העור בפעילות חוץ: שעות נמוכות-UV, צל, לבוש מגן וקרם`,
        en: `Protect the skin during outdoor activity: low-UV hours, shade, protective clothing and sunscreen`,
        ru: `Защищать кожу при активности на улице: часы с низким UV, тень, защитная одежда и крем`,
      },
    ],
    tip: {
      he: `קורטיזול ↓ = דלקת ↓`,
      en: `Cortisol ↓ = inflammation ↓`,
      ru: `Кортизол ↓ = воспаление ↓`,
    },
  },
  {
    n: 11, color: 'sky', phase: 4,
    theme: {
      he: `מחסום העור וטיפוח מקומי`,
      en: `The skin barrier and topical care`,
      ru: `Кожный барьер и местный уход`,
    },
    focus: {
      he: `להרגיע צריבה ולחזק עור`,
      en: `Soothe burning and strengthen the skin`,
      ru: `Успокоить жжение и укрепить кожу`,
    },
    why: {
      he: `בזאבת עורית מחסום העור פגוע ורגיש, ותחושת ה"כווייה" והצריבה שאת מתארת נובעת מדלקת מקומית ומיובש. טיפוח נכון לא מטפל במחלה עצמה אבל מוריד סבל יומיומי ותומך בריפוי: קרם לחות ללא בושם וללא אלכוהול משקם את מחסום השומנים, מפחית אובדן מים ומרגיע. מוצרים נטולי-ריח חשובים כי בשמים הם גורם נפוץ לגירוי ולאלרגיה בעור דלקתי. שמן אובלפיחה לשימוש חיצוני, עשיר באומגה-7 וקרוטנואידים, נחקר כתומך בריפוי מחסום העור בדרמטיטיס ובפסוריאזיס — ויכול לשמש כשכבת הזנה עדינה (לבדוק רגישות באזור קטן קודם). קומפרסים קרירים מרגיעים צריבה אקוטית. וכמובן — כל זה תמיד מעל שכבת הגנת השמש, שנשארת הבסיס.`,
      en: `In cutaneous lupus the skin barrier is damaged and sensitive, and the "burning" and stinging sensation you describe stems from local inflammation and dryness. Proper skin care does not treat the disease itself but reduces daily suffering and supports healing: a fragrance-free and alcohol-free moisturizer repairs the lipid barrier, reduces water loss and soothes. Fragrance-free products are important because perfumes are a common cause of irritation and allergy in inflamed skin. Sea buckthorn oil for topical use, rich in omega-7 and carotenoids, has been studied as supporting skin-barrier healing in dermatitis and psoriasis — and can serve as a gentle nourishing layer (test for sensitivity on a small area first). Cool compresses soothe acute burning. And of course — all of this always goes over the layer of sun protection, which remains the foundation.`,
      ru: `При кожной волчанке кожный барьер повреждён и чувствителен, а ощущение "ожога" и жжения, которое вы описываете, возникает из-за местного воспаления и сухости. Правильный уход не лечит саму болезнь, но уменьшает ежедневные страдания и поддерживает заживление: увлажняющий крем без отдушек и без спирта восстанавливает липидный барьер, снижает потерю влаги и успокаивает. Продукты без запаха важны, потому что парфюмерные отдушки — частая причина раздражения и аллергии на воспалённой коже. Масло облепихи для наружного применения, богатое омега-7 и каротиноидами, изучалось как поддерживающее заживление кожного барьера при дерматите и псориазе — и может служить мягким питательным слоем (сначала проверить чувствительность на небольшом участке). Прохладные компрессы успокаивают острое жжение. И, конечно, всё это всегда поверх слоя солнцезащиты, который остаётся основой.`,
    },
    tasks: [
      {
        he: `לבנות שגרה עדינה: ניקוי רך ללא סבון חזק → לחות ללא בושם → הגנת שמש`,
        en: `Build a gentle routine: soft cleansing without harsh soap → fragrance-free moisturizer → sun protection`,
        ru: `Выстроить мягкий уход: деликатное очищение без жёсткого мыла → увлажнение без отдушек → защита от солнца`,
      },
      {
        he: `להוסיף קרם/שמן מחסום עשיר בערב (אובלפיחה חיצוני / סרמיד / שיאה)`,
        en: `Add a rich barrier cream/oil in the evening (topical sea buckthorn / ceramide / shea)`,
        ru: `Добавить вечером насыщенный барьерный крем/масло (наружная облепиха / церамид / ши)`,
      },
      {
        he: `קומפרס קריר לתחושת צריבה אקוטית, וקרם לחות לאחר רחצה על עור לח`,
        en: `A cool compress for acute burning, and moisturizer after bathing on damp skin`,
        ru: `Прохладный компресс при остром жжении и увлажняющий крем после купания на влажную кожу`,
      },
      {
        he: `להימנע ממוצרים עם בושם, אלכוהול מייבש ופילינג מגרה`,
        en: `Avoid products with fragrance, drying alcohol and irritating exfoliation`,
        ru: `Избегать продуктов с отдушками, высушивающим спиртом и раздражающего пилинга`,
      },
    ],
    tip: {
      he: `ללא בושם · מעל הגנת שמש`,
      en: `Fragrance-free · over sun protection`,
      ru: `Без отдушек · поверх защиты от солнца`,
    },
  },
  {
    n: 12, color: 'green', phase: 4,
    theme: {
      he: `סיכום, מעקב וקיימוּת`,
      en: `Summary, follow-up and sustainability`,
      ru: `Итоги, наблюдение и устойчивость`,
    },
    focus: {
      he: `להפוך שינוי לאורח חיים`,
      en: `Turn change into a way of life`,
      ru: `Превратить перемены в образ жизни`,
    },
    why: {
      he: `שתים-עשרה שבועות מספיקים כדי לבסס הרגלים, אבל זאבת היא מחלה כרונית ומחזורית — לכן הערך האמיתי הוא בהפיכת השינויים לקבועים ובמעקב מסודר. בשבוע הזה משווים: צילומי העור מתחילת התוכנית מול עכשיו, מדדי עייפות, צריבה ושינה, ובדיקות הדם (כולל ויטמין D ושומנים אם נכנסתם לכיוון קטו). חשוב לזכור שכל התוכנית הזו היא שכבת תמיכה סביב הטיפול הרפואי — הגנת שמש, תזונה ותוספים אינם תחליף להידרוקסיכלורוקין, לטיפול מקומי או למעקב הרופא, אלא מגדילים את הסיכוי שהם יעבדו. נקודת הסיום היא בעצם נקודת התחלה: לבחור את 4–5 ההרגלים שהכי עבדו עבורך ולהפוך אותם לברירת מחדל, ולקבוע מעקב תקופתי קבוע עם הרופא/ה.`,
      en: `Twelve weeks are enough to establish habits, but lupus is a chronic and cyclical disease — so the real value lies in making the changes permanent and in orderly follow-up. This week you compare: the skin photographs from the start of the program against now, measures of fatigue, burning and sleep, and the blood tests (including vitamin D and lipids if you went in the keto direction). It is important to remember that this entire program is a layer of support around medical treatment — sun protection, nutrition and supplements are not a substitute for hydroxychloroquine, topical treatment or the physician's monitoring, but rather increase the chance that they will work. The end point is in fact a starting point: choose the 4–5 habits that worked best for you and make them the default, and set up regular periodic follow-up with your physician.`,
      ru: `Двенадцати недель достаточно, чтобы закрепить привычки, но волчанка — хроническое и циклическое заболевание, поэтому настоящая ценность — в том, чтобы сделать изменения постоянными и в упорядоченном наблюдении. На этой неделе вы сравниваете: фотографии кожи с начала программы и сейчас, показатели усталости, жжения и сна, а также анализы крови (включая витамин D и липиды, если вы шли в направлении кето). Важно помнить, что вся эта программа — это слой поддержки вокруг медицинского лечения: защита от солнца, питание и добавки не заменяют гидроксихлорохин, местное лечение или наблюдение врача, а лишь повышают вероятность того, что они сработают. Конечная точка на самом деле является точкой старта: выберите 4–5 привычек, которые сработали для вас лучше всего, и сделайте их нормой, а также установите регулярное периодическое наблюдение у врача.`,
    },
    tasks: [
      {
        he: `להשוות צילומי "יומן העור" ומדדי עייפות/צריבה/שינה לתחילת התוכנית`,
        en: `Compare the "skin journal" photographs and the fatigue/burning/sleep measures to the start of the program`,
        ru: `Сравнить фотографии "дневника кожи" и показатели усталости/жжения/сна с началом программы`,
      },
      {
        he: `לחזור על בדיקות רלוונטיות (ויטמין D, ולפי הצורך פרופיל שומנים/דלקת)`,
        en: `Repeat relevant tests (vitamin D, and if needed a lipid/inflammation profile)`,
        ru: `Повторить соответствующие анализы (витамин D и при необходимости липидный/воспалительный профиль)`,
      },
      {
        he: `לבחור 4–5 הרגלים מנצחים ולקבע אותם כקבועים`,
        en: `Choose 4–5 winning habits and lock them in as permanent`,
        ru: `Выбрать 4–5 выигрышных привычек и закрепить их как постоянные`,
      },
      {
        he: `לקבוע עם הרופא/ה מעקב תקופתי, ולהמשיך את הטיפול התרופתי כרגיל`,
        en: `Arrange periodic follow-up with your physician, and continue the medication treatment as usual`,
        ru: `Договориться с врачом о периодическом наблюдении и продолжать медикаментозное лечение как обычно`,
      },
    ],
    tip: {
      he: `תמיכה — לא תחליף לטיפול`,
      en: `Support — not a substitute for treatment`,
      ru: `Поддержка — не замена лечения`,
    },
  },
]
export const BERRIES = [
  {
    name: {
      he: `אובלפיחה (אשחר מצוי)`,
      en: `Sea Buckthorn (Common Sallowthorn)`,
      ru: `Облепиха (облепиха крушиновидная)`,
    },
    latin: 'Sea Buckthorn · Hippophae',
    icon: 'berry',
    body: {
      he: `כוכבת פירות היער לעור. עשירה בוויטמין C (פי כמה מתפוז), בקרוטנואידים, ובאומגה-7 (חומצה פלמיטולאית) הנדירה — שומן שהוא מרכיב טבעי של ליפידי העור ותומך בריפוי, בייצור קולגן ובחיזוק מחסום העור והריריות. נחקרה לתמיכה בדרמטיטיס, פסוריאזיס וריפוי פצעים. ניתן לצרוך כפירה/מיץ, כשמן בכמוסות, או כשמן חיצוני על העור.`,
      en: `The star berry for skin. Rich in vitamin C (several times more than an orange), in carotenoids, and in rare omega-7 (palmitoleic acid) — a fat that is a natural component of skin lipids and supports healing, collagen production, and strengthening of the skin and mucosal barrier. It has been studied for support in dermatitis, psoriasis, and wound healing. It can be consumed as fruit/juice, as oil in capsules, or as an external oil applied to the skin.`,
      ru: `Звезда среди ягод для кожи. Богата витамином C (в несколько раз больше, чем в апельсине), каротиноидами и редкой омега-7 (пальмитолеиновой кислотой) — жиром, который является естественным компонентом липидов кожи и поддерживает заживление, выработку коллагена и укрепление барьера кожи и слизистых оболочек. Изучалась для поддержки при дерматите, псориазе и заживлении ран. Можно употреблять в виде ягод/сока, в виде масла в капсулах или как наружное масло для кожи.`,
    },
    tags: [
      ['ev', { he: `אומגה-7`, en: `Omega-7`, ru: `Омега-7` }],
      ['ev', { he: `ויטמין C`, en: `Vitamin C`, ru: `Витамин C` }],
      ['sk', { he: `מחסום עור`, en: `Skin barrier`, ru: `Кожный барьер` }],
    ],
    kw: 'sea buckthorn oil omega 7',
  },
  {
    name: {
      he: `חמוציות`,
      en: `Cranberry`,
      ru: `Клюква`,
    },
    latin: 'Cranberry · Vaccinium',
    icon: 'berry',
    body: {
      he: `עשירות בפרואנתוציאנידינים ובפוליפנולים נוגדי-חמצון. מעבר לפעילות האנטי-דלקתית, הן ידועות במניעת זיהומי דרכי שתן — רלוונטי במיוחד למי שנוטלת תרופות מדכאות-חיסון ונוטה יותר לזיהומים. עדיף לא-ממותקות (מיץ/פרי) או תוסף מרוכז, שכן מיץ מסחרי ממותק טוען בסוכר שמלבה דלקת.`,
      en: `Rich in proanthocyanidins and antioxidant polyphenols. Beyond their anti-inflammatory activity, they are known for preventing urinary tract infections — especially relevant for anyone taking immunosuppressive medication and more prone to infections. Unsweetened forms (juice/fruit) or a concentrated supplement are preferable, since commercial sweetened juice loads you with sugar that fuels inflammation.`,
      ru: `Богата проантоцианидинами и антиоксидантными полифенолами. Помимо противовоспалительной активности, она известна профилактикой инфекций мочевыводящих путей — что особенно актуально для тех, кто принимает иммуносупрессивные препараты и более склонен к инфекциям. Предпочтительнее несладкие формы (сок/ягоды) или концентрированная добавка, так как промышленный подслащённый сок перегружает сахаром, который разжигает воспаление.`,
    },
    tags: [
      ['ev', { he: `פוליפנולים`, en: `Polyphenols`, ru: `Полифенолы` }],
      ['sk', { he: `מניעת זיהומי שתן`, en: `UTI prevention`, ru: `Профилактика инфекций мочевыводящих путей` }],
      ['ca', { he: `לא-ממותק`, en: `Unsweetened`, ru: `Без сахара` }],
    ],
    kw: 'cranberry extract unsweetened',
  },
  {
    name: {
      he: `אוכמניות ופטל`,
      en: `Blueberries and Raspberries`,
      ru: `Черника и малина`,
    },
    latin: 'Blueberry · Raspberry',
    icon: 'berry',
    body: {
      he: `מהמקורות המרוכזים ביותר של אנתוציאנינים — הפיגמנטים הכחולים-סגולים שהם נוגדי-חמצון רבי-עוצמה ובעלי פעילות אנטי-דלקתית. תומכים בהגנה על תאים מפני נזק חמצוני, כולל זה שנגרם מחשיפת UV. הקפאה שומרת היטב על האנתוציאנינים — אז קפואים זה מצוין וזול.`,
      en: `Among the most concentrated sources of anthocyanins — the blue-purple pigments that are powerful antioxidants with anti-inflammatory activity. They support protection of cells from oxidative damage, including damage caused by UV exposure. Freezing preserves anthocyanins well — so frozen is excellent and inexpensive.`,
      ru: `Одни из самых концентрированных источников антоцианов — сине-фиолетовых пигментов, которые являются мощными антиоксидантами с противовоспалительной активностью. Они поддерживают защиту клеток от окислительного повреждения, в том числе вызванного воздействием UV. Заморозка хорошо сохраняет антоцианы — поэтому замороженные ягоды это отлично и недорого.`,
    },
    tags: [
      ['ev', { he: `אנתוציאנינים`, en: `Anthocyanins`, ru: `Антоцианы` }],
      ['sk', { he: `הגנה מחמצון`, en: `Antioxidant protection`, ru: `Защита от окисления` }],
    ],
    kw: 'wild blueberry powder',
  },
  {
    name: {
      he: `רימון וארוניה`,
      en: `Pomegranate and Aronia`,
      ru: `Гранат и арония`,
    },
    latin: 'Pomegranate · Aronia',
    icon: 'berry',
    body: {
      he: `רימון עשיר בפוניקלגינים ובאלגיטנינים נוגדי-חמצון; ארוניה (אשחר שחור) מחזיקה את אחד הריכוזים הגבוהים בעולם של אנתוציאנינים. שניהם מרחיבים את מגוון הפוליפנולים בתפריט — והמגוון הוא המפתח, כי כל משפחת נוגדי-חמצון מגינה במנגנון אחר.`,
      en: `Pomegranate is rich in antioxidant punicalagins and ellagitannins; aronia (black chokeberry) holds one of the world's highest concentrations of anthocyanins. Both broaden the variety of polyphenols in your menu — and variety is the key, because each antioxidant family protects through a different mechanism.`,
      ru: `Гранат богат антиоксидантными пуникалагинами и эллаготаннинами; арония (черноплодная рябина) содержит одну из самых высоких в мире концентраций антоцианов. Оба расширяют разнообразие полифенолов в рационе — а разнообразие это ключ, потому что каждое семейство антиоксидантов защищает по своему механизму.`,
    },
    tags: [
      ['ev', { he: `מגוון פוליפנולים`, en: `Polyphenol variety`, ru: `Разнообразие полифенолов` }],
      ['sk', { he: `נוגד-חמצון חזק`, en: `Strong antioxidant`, ru: `Сильный антиоксидант` }],
    ],
    kw: 'aronia chokeberry pomegranate extract',
  },
]

export const SUPPLEMENTS = [
  {
    name: {
      he: `ויטמין D3 (+K2)`,
      en: `Vitamin D3 (+K2)`,
      ru: `Витамин D3 (+K2)`,
    },
    latin: 'Vitamin D3 + K2',
    icon: 'sun',
    dose: {
      he: `לרוב 1000–2000 יחב"ל/יום לתחזוקה · מינון לפי בדיקת דם`,
      en: `Usually 1000–2000 IU/day for maintenance · dose according to blood test`,
      ru: `Обычно 1000–2000 МЕ/день для поддержания · дозировка по анализу крови`,
    },
    body: {
      he: `מאפנן חיסוני מרכזי: מרסן תאי Th17 פרו-דלקתיים, מחזק תאי T-רגולטוריים ומוריד פעילות מחלה (SLEDAI) במחקרים. חוסר נפוץ מאוד בזאבת בגלל הימנעות משמש. K2 מסייע לנתב סידן לעצמות ולא לעורקים. זהו תוסף "מרגיע" חיסון — בטוח ומומלץ בזאבת, בניגוד לתוספים "מחזקי חיסון".`,
      en: `A central immunomodulator: it restrains pro-inflammatory Th17 cells, strengthens regulatory T cells, and lowers disease activity (SLEDAI) in studies. Deficiency is very common in lupus because of sun avoidance. K2 helps direct calcium to the bones and not to the arteries. This is an immune-"calming" supplement — safe and recommended in lupus, unlike "immune-boosting" supplements.`,
      ru: `Ключевой иммуномодулятор: сдерживает провоспалительные клетки Th17, укрепляет регуляторные T-клетки и снижает активность заболевания (SLEDAI) в исследованиях. Дефицит очень распространён при волчанке из-за избегания солнца. K2 помогает направлять кальций в кости, а не в артерии. Это «успокаивающая» иммунитет добавка — безопасная и рекомендуемая при волчанке, в отличие от «иммуностимулирующих» добавок.`,
    },
    tags: [
      ['ev', { he: `ראיות במחקר`, en: `Research evidence`, ru: `Доказательства в исследованиях` }],
      ['sk', { he: `מאפנן חיסון`, en: `Immunomodulator`, ru: `Иммуномодулятор` }],
      ['ca', { he: `לפי בדיקת דם`, en: `Per blood test`, ru: `По анализу крови` }],
    ],
    kw: 'vitamin d3 k2 5000',
  },
  {
    name: {
      he: `אומגה-3 (שמן דגים)`,
      en: `Omega-3 (Fish Oil)`,
      ru: `Омега-3 (рыбий жир)`,
    },
    latin: 'Omega-3 EPA/DHA',
    icon: 'fish',
    dose: {
      he: `כ-1000–2000 מ"ג EPA+DHA ליום`,
      en: `About 1000–2000 mg EPA+DHA per day`,
      ru: `Около 1000–2000 мг EPA+DHA в день`,
    },
    body: {
      he: `מזין מולקולות מרגיעות-דלקת ו"ממיסי-דלקת" (רזולווינים). בניסויים בזאבת הוריד CRP/ESR ומדדי פעילות, ובחלק מהעבודות שיפר ממצאי עור. לבחור צורת טריגליצריד (TG) מטוהרת ממתכות כבדות, רצוי עם חותם איכות (IFOS).`,
      en: `It nourishes inflammation-calming molecules and "inflammation-resolving" ones (resolvins). In lupus trials it lowered CRP/ESR and activity measures, and in some studies it improved skin findings. Choose the triglyceride (TG) form purified of heavy metals, preferably with a quality seal (IFOS).`,
      ru: `Питает противовоспалительные и «разрешающие воспаление» молекулы (резолвины). В исследованиях при волчанке снижал CRP/ESR и показатели активности, а в некоторых работах улучшал состояние кожи. Выбирайте форму триглицеридов (TG), очищенную от тяжёлых металлов, желательно с знаком качества (IFOS).`,
    },
    tags: [
      ['ev', { he: `ראיות בזאבת`, en: `Evidence in lupus`, ru: `Доказательства при волчанке` }],
      ['sk', { he: `אנטי-דלקתי`, en: `Anti-inflammatory`, ru: `Противовоспалительный` }],
      ['ca', { he: `טוהר/מתכות`, en: `Purity/metals`, ru: `Чистота/металлы` }],
    ],
    kw: 'omega 3 fish oil triglyceride IFOS',
  },
  {
    name: {
      he: `כורכומין (עם פיפרין)`,
      en: `Curcumin (with Piperine)`,
      ru: `Куркумин (с пиперином)`,
    },
    latin: 'Curcumin + Piperine',
    icon: 'flask',
    dose: {
      he: `נחקר ~500–1000 מ"ג/יום · עם פיפרין/פוספוליפיד`,
      en: `Studied at ~500–1000 mg/day · with piperine/phospholipid`,
      ru: `Изучен в дозе ~500–1000 мг/день · с пиперином/фосфолипидом`,
    },
    body: {
      he: `מעכב מסלולי דלקת מרכזיים (NLRP3, NF-κB). בניסוי מבוקר בזאבת הפחית IL-6 ו-anti-dsDNA. ספיגה טבעית נמוכה — לכן צורות עם פיפרין או נשא פוספוליפידי עדיפות. להיזהר/להתייעץ אם נוטלים מדללי דם.`,
      en: `It inhibits central inflammation pathways (NLRP3, NF-κB). In a controlled lupus trial it reduced IL-6 and anti-dsDNA. Natural absorption is low — therefore forms with piperine or a phospholipid carrier are preferable. Be careful/consult if you take blood thinners.`,
      ru: `Ингибирует ключевые пути воспаления (NLRP3, NF-κB). В контролируемом исследовании при волчанке снижал IL-6 и anti-dsDNA. Естественное усвоение низкое — поэтому предпочтительны формы с пиперином или фосфолипидным носителем. Будьте осторожны/проконсультируйтесь, если принимаете препараты, разжижающие кровь.`,
    },
    tags: [
      ['ev', { he: `RCT בזאבת`, en: `RCT in lupus`, ru: `RCT при волчанке` }],
      ['sk', { he: `אנטי-דלקתי`, en: `Anti-inflammatory`, ru: `Противовоспалительный` }],
      ['ca', { he: `מדללי דם`, en: `Blood thinners`, ru: `Разжижители крови` }],
    ],
    kw: 'curcumin phytosome bioperine',
  },
  {
    name: {
      he: `שמן אובלפיחה`,
      en: `Sea Buckthorn Oil`,
      ru: `Облепиховое масло`,
    },
    latin: 'Sea Buckthorn Oil',
    icon: 'drop',
    dose: {
      he: `כמוסות לפי יצרן · ו/או שימוש חיצוני`,
      en: `Capsules per manufacturer · and/or external use`,
      ru: `Капсулы по указанию производителя · и/или наружное применение`,
    },
    body: {
      he: `מקור ייחודי לאומגה-7 (פלמיטולאית), קרוטנואידים וויטמין E. תומך בריפוי מחסום העור והריריות, נחקר בדרמטיטיס ובריפוי. אפשר פנימי (כמוסות) וחיצוני (שמן על העור — לבדוק רגישות באזור קטן קודם).`,
      en: `A unique source of omega-7 (palmitoleic acid), carotenoids, and vitamin E. It supports healing of the skin and mucosal barrier and has been studied in dermatitis and wound healing. It can be used internally (capsules) and externally (oil on the skin — test sensitivity on a small area first).`,
      ru: `Уникальный источник омега-7 (пальмитолеиновой кислоты), каротиноидов и витамина E. Поддерживает заживление барьера кожи и слизистых оболочек, изучался при дерматите и заживлении. Можно применять внутрь (капсулы) и наружно (масло на кожу — сначала проверьте чувствительность на небольшом участке).`,
    },
    tags: [
      ['ev', { he: `אומגה-7`, en: `Omega-7`, ru: `Омега-7` }],
      ['sk', { he: `מחסום עור`, en: `Skin barrier`, ru: `Кожный барьер` }],
      ['ca', { he: `טסט רגישות`, en: `Sensitivity test`, ru: `Тест на чувствительность` }],
    ],
    kw: 'sea buckthorn oil capsules',
  },
  {
    name: {
      he: `תמצית חמוציות`,
      en: `Cranberry Extract`,
      ru: `Экстракт клюквы`,
    },
    latin: 'Cranberry Extract',
    icon: 'berry',
    dose: {
      he: `לפי יצרן (PAC מתוקנן)`,
      en: `Per manufacturer (standardized PAC)`,
      ru: `По указанию производителя (стандартизированный PAC)`,
    },
    body: {
      he: `פרואנתוציאנידינים נוגדי-חמצון + תמיכה במניעת זיהומי שתן (חשוב תחת טיפול מדכא-חיסון). חלופה נוחה למיץ ממותק. לבחור תקן PAC ולא "מיץ" עתיר סוכר.`,
      en: `Antioxidant proanthocyanidins + support in preventing urinary tract infections (important under immunosuppressive treatment). A convenient alternative to sweetened juice. Choose a PAC standard and not high-sugar "juice".`,
      ru: `Антиоксидантные проантоцианидины + поддержка в профилактике инфекций мочевыводящих путей (важно при иммуносупрессивной терапии). Удобная альтернатива подслащённому соку. Выбирайте стандарт PAC, а не «сок» с высоким содержанием сахара.`,
    },
    tags: [
      ['ev', { he: `פוליפנולים`, en: `Polyphenols`, ru: `Полифенолы` }],
      ['sk', { he: `דרכי שתן`, en: `Urinary tract`, ru: `Мочевыводящие пути` }],
      ['ca', { he: `ללא סוכר`, en: `Sugar-free`, ru: `Без сахара` }],
    ],
    kw: 'cranberry extract pac 36mg',
  },
  {
    name: {
      he: `ויטמין C`,
      en: `Vitamin C`,
      ru: `Витамин C`,
    },
    latin: 'Vitamin C',
    icon: 'leaf',
    dose: {
      he: `כ-500 מ"ג/יום (או ממקור מזון)`,
      en: `About 500 mg/day (or from a food source)`,
      ru: `Около 500 мг/день (или из пищевого источника)`,
    },
    body: {
      he: `נוגד-חמצון מסיס במים וקו-פקטור לייצור קולגן — תומך בעור ובריפוי. בזאבת עורית, שבה יש סטרס חמצוני מוגבר, הוא משלים את פירות היער. עדיף לקבל בעיקר מהמזון (פירות יער, פלפל, הדרים), ותוסף מתון לפי הצורך.`,
      en: `A water-soluble antioxidant and a cofactor for collagen production — it supports the skin and healing. In cutaneous lupus, where there is increased oxidative stress, it complements the berries. It is preferable to obtain it mainly from food (berries, peppers, citrus), with a moderate supplement as needed.`,
      ru: `Водорастворимый антиоксидант и кофактор для выработки коллагена — поддерживает кожу и заживление. При кожной волчанке, где повышен окислительный стресс, он дополняет ягоды. Предпочтительно получать его в основном из пищи (ягоды, перец, цитрусовые), а умеренную добавку — по необходимости.`,
    },
    tags: [
      ['ev', { he: `נוגד-חמצון`, en: `Antioxidant`, ru: `Антиоксидант` }],
      ['sk', { he: `קולגן/עור`, en: `Collagen/skin`, ru: `Коллаген/кожа` }],
    ],
    kw: 'vitamin c liposomal',
  },
]
export const BIOHACK = [
  {
    group: {
      he: `תוספים סיסטמיים נוספים`,
      en: `Additional systemic supplements`,
      ru: `Дополнительные системные добавки`,
    },
    icon: 'capsule',
    intro: {
      he: `מעבר לליבה — פריטים עם בסיס מנגנוני. רובם Tier C (ניסיוני). להוסיף אחד-אחד, כמה ימים זה מזה, ובליווי רופא/ה.`,
      en: `Beyond the core — items with a mechanistic basis. Most are Tier C (experimental). Add them one at a time, a few days apart, and under a physician's supervision.`,
      ru: `За пределами базовой программы — средства с механистическим обоснованием. Большинство относится к Tier C (экспериментальные). Добавляйте по одному, с интервалом в несколько дней и под наблюдением врача.`,
    },
    items: [
      {
        name: {
          he: `NAC (N-אצטיל-ציסטאין)`,
          en: `NAC (N-acetylcysteine)`,
          ru: `NAC (N-ацетилцистеин)`,
        },
        latin: `N-Acetylcysteine`,
        icon: `capsule`,
        dose: {
          he: `~1800 מ"ג/יום במנות מחולקות`,
          en: `~1800 mg/day in divided doses`,
          ru: `~1800 мг/день в разделённых дозах`,
        },
        body: {
          he: `אבן בניין לגלוטתיון — נוגד-החמצון המרכזי של הגוף. ניסוי מבוקר ב-SLE במינון זה הראה ירידה בפעילות המחלה, כולל בעור. "מרגיע" חיסון ולא "מגרה".`,
          en: `A building block for glutathione — the body's central antioxidant. A controlled trial in SLE at this dose showed a reduction in disease activity, including in the skin. It "calms" the immune system rather than "stimulating" it.`,
          ru: `Строительный материал для глутатиона — центрального антиоксиданта организма. Контролируемое исследование при СКВ в этой дозе показало снижение активности заболевания, в том числе на коже. «Успокаивает» иммунитет, а не «стимулирует» его.`,
        },
        tags: [
          ['ti', { he: `Tier B`, en: `Tier B`, ru: `Tier B` }],
          ['ev', { he: `גלוטתיון`, en: `Glutathione`, ru: `Глутатион` }],
          ['sk', { he: `אנטי-דלקתי`, en: `Anti-inflammatory`, ru: `Противовоспалительное` }],
        ],
        kw: `nac n-acetyl cysteine 600`,
      },
      {
        name: {
          he: `מלטונין`,
          en: `Melatonin`,
          ru: `Мелатонин`,
        },
        latin: `Melatonin`,
        icon: `moon`,
        dose: {
          he: `3–5 מ"ג לפני השינה · להתחיל נמוך`,
          en: `3–5 mg before bed · start low`,
          ru: `3–5 мг перед сном · начинать с низкой дозы`,
        },
        body: {
          he: `נוגד-חמצון והורמון שינה; עשוי לאזן תאי Th17. תומך בשינה איכותית — מנוף מרכזי להורדת קורטיזול ולמניעת התלקחויות.`,
          en: `An antioxidant and sleep hormone; it may help balance Th17 cells. Supports high-quality sleep — a key lever for lowering cortisol and preventing flares.`,
          ru: `Антиоксидант и гормон сна; может способствовать балансу клеток Th17. Поддерживает качественный сон — ключевой рычаг для снижения кортизола и предотвращения обострений.`,
        },
        tags: [
          ['ti', { he: `Tier C`, en: `Tier C`, ru: `Tier C` }],
          ['sk', { he: `שינה`, en: `Sleep`, ru: `Сон` }],
          ['ev', { he: `נוגד-חמצון`, en: `Antioxidant`, ru: `Антиоксидант` }],
        ],
        kw: `melatonin 3mg`,
      },
      {
        name: {
          he: `ויטמין A`,
          en: `Vitamin A`,
          ru: `Витамин A`,
        },
        latin: `Vitamin A / Beta-carotene`,
        icon: `sun`,
        dose: {
          he: `~2500–3000 יחב"ל/יום · לשמור מתון`,
          en: `~2500–3000 IU/day · keep it moderate`,
          ru: `~2500–3000 МЕ/день · придерживаться умеренной дозы`,
        },
        body: {
          he: `תומך בריריות ובתאי T-רגולטוריים במעי. לשמור מינון כולל מתון, עדיף בטא-קרוטן ממזון. להימנע בהיריון.`,
          en: `Supports the mucous membranes and regulatory T cells in the gut. Keep the total dose moderate, preferably beta-carotene from food. Avoid during pregnancy.`,
          ru: `Поддерживает слизистые оболочки и регуляторные T-клетки в кишечнике. Сохраняйте умеренную суммарную дозу, предпочтительно бета-каротин из пищи. Избегать при беременности.`,
        },
        tags: [
          ['ti', { he: `Tier C`, en: `Tier C`, ru: `Tier C` }],
          ['ca', { he: `מתון · לא בהיריון`, en: `Moderate · not during pregnancy`, ru: `Умеренно · не при беременности` }],
          ['sk', { he: `רירית/מעי`, en: `Mucosa/gut`, ru: `Слизистая/кишечник` }],
        ],
        kw: `vitamin a beta carotene`,
      },
    ],
  },
  {
    group: {
      he: `מינרלים`,
      en: `Minerals`,
      ru: `Минералы`,
    },
    icon: 'mineral',
    intro: {
      he: `לתקן חוסר, לא להעמיס. שמרי על תקרות הבטיחות — אבץ עד 30 מ"ג, סלניום עד ~200 מק"ג.`,
      en: `Correct a deficiency, don't overload. Stay within the safety ceilings — zinc up to 30 mg, selenium up to ~200 mcg.`,
      ru: `Восполнять дефицит, а не перегружать. Соблюдайте предельные дозы безопасности — цинк до 30 мг, селен до ~200 мкг.`,
    },
    items: [
      {
        name: {
          he: `מגנזיום גליצינאט`,
          en: `Magnesium glycinate`,
          ru: `Магний глицинат`,
        },
        latin: `Magnesium Glycinate`,
        icon: `mineral`,
        dose: {
          he: `300–400 מ"ג/יום, מחולק בוקר/ערב`,
          en: `300–400 mg/day, split morning/evening`,
          ru: `300–400 мг/день, разделить на утро/вечер`,
        },
        body: {
          he: `מרגיע איתות עצבי ודלקתי ותומך בשינה. צורת הגליצינאט עדינה לקיבה ונספגת היטב.`,
          en: `Calms neural and inflammatory signaling and supports sleep. The glycinate form is gentle on the stomach and well absorbed.`,
          ru: `Успокаивает нервную и воспалительную сигнализацию и поддерживает сон. Глицинатная форма мягко действует на желудок и хорошо усваивается.`,
        },
        tags: [
          ['ti', { he: `Tier C`, en: `Tier C`, ru: `Tier C` }],
          ['sk', { he: `עצבים/שינה`, en: `Nerves/sleep`, ru: `Нервы/сон` }],
        ],
        kw: `magnesium glycinate`,
      },
      {
        name: {
          he: `אבץ פיקולינאט`,
          en: `Zinc picolinate`,
          ru: `Цинк пиколинат`,
        },
        latin: `Zinc Picolinate`,
        icon: `mineral`,
        dose: {
          he: `15–20 מ"ג/יום · תקרה 30 מ"ג`,
          en: `15–20 mg/day · ceiling 30 mg`,
          ru: `15–20 мг/день · предел 30 мг`,
        },
        body: {
          he: `ויסות חיסוני ושיקום עור. עודף מדלדל נחושת — לא לחרוג מ-30 מ"ג ליום.`,
          en: `Immune regulation and skin repair. An excess depletes copper — do not exceed 30 mg per day.`,
          ru: `Иммунная регуляция и восстановление кожи. Избыток истощает запасы меди — не превышать 30 мг в день.`,
        },
        tags: [
          ['ti', { he: `Tier B/C`, en: `Tier B/C`, ru: `Tier B/C` }],
          ['sk', { he: `עור/חיסון`, en: `Skin/immune`, ru: `Кожа/иммунитет` }],
          ['ca', { he: `תקרה 30 מ"ג`, en: `Ceiling 30 mg`, ru: `Предел 30 мг` }],
        ],
        kw: `zinc picolinate 30`,
      },
      {
        name: {
          he: `סלניום`,
          en: `Selenium`,
          ru: `Селен`,
        },
        latin: `Selenium · Selenomethionine`,
        icon: `mineral`,
        dose: {
          he: `100–200 מק"ג/יום`,
          en: `100–200 mcg/day`,
          ru: `100–200 мкг/день`,
        },
        body: {
          he: `קו-פקטור לאנזים גלוטתיון-פרוקסידאז נוגד-החמצון. לא לחרוג מ-~200 מק"ג — סיכון רעילות.`,
          en: `A cofactor for the antioxidant enzyme glutathione peroxidase. Do not exceed ~200 mcg — risk of toxicity.`,
          ru: `Кофактор антиоксидантного фермента глутатионпероксидазы. Не превышать ~200 мкг — риск токсичности.`,
        },
        tags: [
          ['ti', { he: `Tier B/C`, en: `Tier B/C`, ru: `Tier B/C` }],
          ['ev', { he: `נוגד-חמצון`, en: `Antioxidant`, ru: `Антиоксидант` }],
          ['ca', { he: `תקרה 200 מק"ג`, en: `Ceiling 200 mcg`, ru: `Предел 200 мкг` }],
        ],
        kw: `selenium selenomethionine 200`,
      },
    ],
  },
  {
    group: {
      he: `בוטניקה אנטי-דלקתית ונוגדת-חמצון`,
      en: `Anti-inflammatory and antioxidant botanicals`,
      ru: `Противовоспалительная и антиоксидантная фитотерапия`,
    },
    icon: 'sprout',
    intro: {
      he: `צמחים עם מנגנון אנטי-דלקתי. רובם Tier C — להוסיף לפי תגובה, ולדגל מדללי-דם לפני ביופסיה.`,
      en: `Plants with an anti-inflammatory mechanism. Most are Tier C — add according to response, and flag blood thinners before a biopsy.`,
      ru: `Растения с противовоспалительным механизмом. Большинство относится к Tier C — добавляйте в зависимости от реакции и отмечайте средства, разжижающие кровь, перед биопсией.`,
    },
    items: [
      {
        name: {
          he: `קוורצטין`,
          en: `Quercetin`,
          ru: `Кверцетин`,
        },
        latin: `Quercetin`,
        icon: `sprout`,
        dose: {
          he: `500 מ"ג/יום`,
          en: `500 mg/day`,
          ru: `500 мг/день`,
        },
        body: {
          he: `מייצב תאי מאסט ומפחית שחרור היסטמין; משתלב יפה עם ויטמין C ורזברטרול.`,
          en: `Stabilizes mast cells and reduces histamine release; combines well with vitamin C and resveratrol.`,
          ru: `Стабилизирует тучные клетки и снижает высвобождение гистамина; хорошо сочетается с витамином C и ресвератролом.`,
        },
        tags: [
          ['ti', { he: `Tier C`, en: `Tier C`, ru: `Tier C` }],
          ['ev', { he: `מייצב מאסט`, en: `Mast cell stabilizer`, ru: `Стабилизатор тучных клеток` }],
          ['sk', { he: `אנטי-דלקתי`, en: `Anti-inflammatory`, ru: `Противовоспалительное` }],
        ],
        kw: `quercetin 500 with bromelain`,
      },
      {
        name: {
          he: `רזברטרול`,
          en: `Resveratrol`,
          ru: `Ресвератрол`,
        },
        latin: `Resveratrol`,
        icon: `sprout`,
        dose: {
          he: `150–250 מ"ג/יום`,
          en: `150–250 mg/day`,
          ru: `150–250 мг/день`,
        },
        body: {
          he: `מפעיל סירטואינים ומדכא את מסלול NF-κB הדלקתי. מדלל דם קלות — לדגל לפני ביופסיה/ניתוח.`,
          en: `Activates sirtuins and suppresses the inflammatory NF-κB pathway. Mildly thins the blood — flag before a biopsy/surgery.`,
          ru: `Активирует сиртуины и подавляет воспалительный путь NF-κB. Слегка разжижает кровь — отметить перед биопсией/операцией.`,
        },
        tags: [
          ['ti', { he: `Tier C`, en: `Tier C`, ru: `Tier C` }],
          ['ev', { he: `NF-κB`, en: `NF-κB`, ru: `NF-κB` }],
          ['ca', { he: `מדלל דם`, en: `Blood thinner`, ru: `Разжижает кровь` }],
        ],
        kw: `trans resveratrol 250`,
      },
      {
        name: {
          he: `סולפורפן`,
          en: `Sulforaphane`,
          ru: `Сульфорафан`,
        },
        latin: `Sulforaphane · Broccoli Sprout`,
        icon: `sprout`,
        dose: {
          he: `30–50 מ"ג/יום`,
          en: `30–50 mg/day`,
          ru: `30–50 мг/день`,
        },
        body: {
          he: `מפעיל את מסלול Nrf2 נוגד-החמצון של הגוף. מופק מתמצית נבטי ברוקולי.`,
          en: `Activates the body's antioxidant Nrf2 pathway. Derived from broccoli sprout extract.`,
          ru: `Активирует антиоксидантный путь Nrf2 организма. Получают из экстракта ростков брокколи.`,
        },
        tags: [
          ['ti', { he: `Tier C`, en: `Tier C`, ru: `Tier C` }],
          ['ev', { he: `Nrf2`, en: `Nrf2`, ru: `Nrf2` }],
          ['sk', { he: `נוגד-חמצון`, en: `Antioxidant`, ru: `Антиоксидант` }],
        ],
        kw: `sulforaphane broccoli sprout extract`,
      },
      {
        name: {
          he: `לוטאולין`,
          en: `Luteolin`,
          ru: `Лютеолин`,
        },
        latin: `Luteolin`,
        icon: `sprout`,
        dose: {
          he: `100–200 מ"ג/יום`,
          en: `100–200 mg/day`,
          ru: `100–200 мг/день`,
        },
        body: {
          he: `מייצב תאי מאסט ומפחית IL-6. משלים את הקוורצטין בעבודה על מסלול ההיסטמין והדלקת.`,
          en: `Stabilizes mast cells and reduces IL-6. Complements quercetin in working on the histamine and inflammation pathway.`,
          ru: `Стабилизирует тучные клетки и снижает IL-6. Дополняет кверцетин в работе над путём гистамина и воспаления.`,
        },
        tags: [
          ['ti', { he: `Tier C`, en: `Tier C`, ru: `Tier C` }],
          ['ev', { he: `מייצב מאסט`, en: `Mast cell stabilizer`, ru: `Стабилизатор тучных клеток` }],
          ['sk', { he: `IL-6`, en: `IL-6`, ru: `IL-6` }],
        ],
        kw: `luteolin supplement`,
      },
      {
        name: {
          he: `ברברין`,
          en: `Berberine`,
          ru: `Берберин`,
        },
        latin: `Berberine`,
        icon: `sprout`,
        dose: {
          he: `500 מ"ג עד 2–3×/יום עם ארוחות`,
          en: `500 mg up to 2–3×/day with meals`,
          ru: `500 мг до 2–3 раз/день во время еды`,
        },
        body: {
          he: `מפעיל AMPK ומפחית אנדוטוקסמיה מטבולית. מוריד סוכר בדם ובעל אינטראקציות תרופתיות רבות — לאשר עם רוקח/ת.`,
          en: `Activates AMPK and reduces metabolic endotoxemia. Lowers blood sugar and has many drug interactions — confirm with a pharmacist.`,
          ru: `Активирует AMPK и снижает метаболическую эндотоксемию. Понижает уровень сахара в крови и имеет множество лекарственных взаимодействий — согласовать с фармацевтом.`,
        },
        tags: [
          ['ti', { he: `Tier C`, en: `Tier C`, ru: `Tier C` }],
          ['ev', { he: `AMPK`, en: `AMPK`, ru: `AMPK` }],
          ['ca', { he: `אינטראקציות · סוכר`, en: `Interactions · blood sugar`, ru: `Взаимодействия · сахар` }],
        ],
        kw: `berberine hcl 500`,
      },
      {
        name: {
          he: `ג'ינג'ר (זנגביל)`,
          en: `Ginger`,
          ru: `Имбирь`,
        },
        latin: `Ginger Root`,
        icon: `sprout`,
        dose: {
          he: `תיבול + תה · אופציונלי כתוסף`,
          en: `Seasoning + tea · optional as a supplement`,
          ru: `Приправа + чай · опционально в виде добавки`,
        },
        body: {
          he: `גינגרול אנטי-דלקתי. ברמת מזון בטוח ופשוט לשילוב יומיומי; תוסף מרוכז כתוספת.`,
          en: `Anti-inflammatory gingerol. At food level it is safe and simple for daily use; a concentrated supplement as an add-on.`,
          ru: `Противовоспалительный гингерол. На пищевом уровне безопасен и прост для ежедневного применения; концентрированная добавка — как дополнение.`,
        },
        tags: [
          ['ti', { he: `Tier C`, en: `Tier C`, ru: `Tier C` }],
          ['ev', { he: `אנטי-דלקתי`, en: `Anti-inflammatory`, ru: `Противовоспалительное` }],
          ['sk', { he: `מזון בטוח`, en: `Safe food`, ru: `Безопасный продукт` }],
        ],
        kw: `ginger root extract`,
      },
    ],
  },
  {
    group: {
      he: `תמיכה במעי ובמחסום`,
      en: `Gut and barrier support`,
      ru: `Поддержка кишечника и барьера`,
    },
    icon: 'drop',
    intro: {
      he: `כ-70% מהחיסון יושב סביב המעי. מחסום חזק = פחות "דלק" לדלקת. אם מדוכאת חיסון — לדון בתרביות חיות עם הרופא/ה.`,
      en: `About 70% of the immune system sits around the gut. A strong barrier = less "fuel" for inflammation. If you are immunosuppressed — discuss live cultures with your physician.`,
      ru: `Около 70% иммунной системы расположено вокруг кишечника. Сильный барьер = меньше «топлива» для воспаления. При иммуносупрессии — обсудите живые культуры с врачом.`,
    },
    items: [
      {
        name: {
          he: `פרוביוטיקה`,
          en: `Probiotics`,
          ru: `Пробиотики`,
        },
        latin: `Probiotics (multi-strain)`,
        icon: `drop`,
        dose: {
          he: `50+ מיליארד CFU/יום · לסובב כל ~4 שבועות`,
          en: `50+ billion CFU/day · rotate every ~4 weeks`,
          ru: `50+ миллиардов CFU/день · ротация каждые ~4 недели`,
        },
        body: {
          he: `זנים מייצרי-בוטיראט ומחזקי-מחסום: Akkermansia, L. plantarum, B. coagulans, S. boulardii, B. longum BB536.`,
          en: `Butyrate-producing and barrier-strengthening strains: Akkermansia, L. plantarum, B. coagulans, S. boulardii, B. longum BB536.`,
          ru: `Штаммы, вырабатывающие бутират и укрепляющие барьер: Akkermansia, L. plantarum, B. coagulans, S. boulardii, B. longum BB536.`,
        },
        tags: [
          ['ti', { he: `Tier C`, en: `Tier C`, ru: `Tier C` }],
          ['ev', { he: `מיקרוביום`, en: `Microbiome`, ru: `Микробиом` }],
          ['ca', { he: `דיכוי חיסוני?`, en: `Immunosuppression?`, ru: `Иммуносупрессия?` }],
        ],
        kw: `probiotic 50 billion multi strain`,
      },
      {
        name: {
          he: `L-גלוטמין`,
          en: `L-glutamine`,
          ru: `L-глутамин`,
        },
        latin: `L-Glutamine`,
        icon: `capsule`,
        dose: {
          he: `5 גרם/יום`,
          en: `5 g/day`,
          ru: `5 г/день`,
        },
        body: {
          he: `משקם צמתים הדוקים (tight junctions) בדופן המעי ומפחית "דליפה" שמלבה חיסון.`,
          en: `Repairs tight junctions in the gut wall and reduces the "leakiness" that inflames the immune system.`,
          ru: `Восстанавливает плотные контакты (tight junctions) в стенке кишечника и снижает «протекание», которое разжигает иммунитет.`,
        },
        tags: [
          ['ti', { he: `Tier C`, en: `Tier C`, ru: `Tier C` }],
          ['sk', { he: `מחסום מעי`, en: `Gut barrier`, ru: `Кишечный барьер` }],
        ],
        kw: `l-glutamine powder`,
      },
      {
        name: {
          he: `אינולין / FOS`,
          en: `Inulin / FOS`,
          ru: `Инулин / FOS`,
        },
        latin: `Inulin / FOS Prebiotic`,
        icon: `sprout`,
        dose: {
          he: `5–10 גרם/יום · להעלות בהדרגה`,
          en: `5–10 g/day · increase gradually`,
          ru: `5–10 г/день · повышать постепенно`,
        },
        body: {
          he: `סיב פרה-ביוטי שמזין חיידקים מתסיסי-סיבים מועילים. להעלות לאט כדי להימנע מגזים.`,
          en: `A prebiotic fiber that feeds beneficial fiber-fermenting bacteria. Increase slowly to avoid gas.`,
          ru: `Пребиотическое волокно, питающее полезные бактерии, ферментирующие клетчатку. Повышайте дозу медленно, чтобы избежать газообразования.`,
        },
        tags: [
          ['ti', { he: `Tier C`, en: `Tier C`, ru: `Tier C` }],
          ['ev', { he: `פרה-ביוטיקה`, en: `Prebiotic`, ru: `Пребиотик` }],
        ],
        kw: `inulin fos prebiotic fiber`,
      },
      {
        name: {
          he: `בוטיראט`,
          en: `Butyrate`,
          ru: `Бутират`,
        },
        latin: `Butyrate`,
        icon: `drop`,
        dose: {
          he: `2–4 גרם/יום`,
          en: `2–4 g/day`,
          ru: `2–4 г/день`,
        },
        body: {
          he: `חומצת שומן קצרת-שרשרת; מעכב HDAC ותומך בתאי T-רגולטוריים (Foxp3+) שמרגיעים חיסון.`,
          en: `A short-chain fatty acid; inhibits HDAC and supports regulatory T cells (Foxp3+) that calm the immune system.`,
          ru: `Короткоцепочечная жирная кислота; ингибирует HDAC и поддерживает регуляторные T-клетки (Foxp3+), которые успокаивают иммунитет.`,
        },
        tags: [
          ['ti', { he: `Tier C`, en: `Tier C`, ru: `Tier C` }],
          ['ev', { he: `Tregs`, en: `Tregs`, ru: `Tregs` }],
          ['sk', { he: `מחסום מעי`, en: `Gut barrier`, ru: `Кишечный барьер` }],
        ],
        kw: `butyrate sodium calcium`,
      },
      {
        name: {
          he: `לקטופרין`,
          en: `Lactoferrin`,
          ru: `Лактоферрин`,
        },
        latin: `Lactoferrin`,
        icon: `drop`,
        dose: {
          he: `250–500 מ"ג/יום`,
          en: `250–500 mg/day`,
          ru: `250–500 мг/день`,
        },
        body: {
          he: `חלבון קושר-ברזל; תומך במחסום המעי ובהפרשת IL-10 אנטי-דלקתי.`,
          en: `An iron-binding protein; supports the gut barrier and the secretion of anti-inflammatory IL-10.`,
          ru: `Железосвязывающий белок; поддерживает кишечный барьер и секрецию противовоспалительного IL-10.`,
        },
        tags: [
          ['ti', { he: `Tier C`, en: `Tier C`, ru: `Tier C` }],
          ['ev', { he: `IL-10`, en: `IL-10`, ru: `IL-10` }],
          ['sk', { he: `מחסום`, en: `Barrier`, ru: `Барьер` }],
        ],
        kw: `lactoferrin 250`,
      },
      {
        name: {
          he: `קולוסטרום (חלב פרה ראשוני)`,
          en: `Colostrum (bovine first milk)`,
          ru: `Молозиво (первичное коровье молоко)`,
        },
        latin: `Bovine Colostrum`,
        icon: `drop`,
        dose: {
          he: `10–20 גרם/יום`,
          en: `10–20 g/day`,
          ru: `10–20 г/день`,
        },
        body: {
          he: `מקור לאימונוגלובולינים וללקטופרין לתמיכה בדופן המעי ובמחסום.`,
          en: `A source of immunoglobulins and lactoferrin to support the gut wall and barrier.`,
          ru: `Источник иммуноглобулинов и лактоферрина для поддержки стенки кишечника и барьера.`,
        },
        tags: [
          ['ti', { he: `Tier C`, en: `Tier C`, ru: `Tier C` }],
          ['ev', { he: `אימונוגלובולינים`, en: `Immunoglobulins`, ru: `Иммуноглобулины` }],
        ],
        kw: `bovine colostrum powder`,
      },
      {
        name: {
          he: `קולגן מהידרוליז / מרק עצמות`,
          en: `Hydrolyzed collagen / bone broth`,
          ru: `Гидролизованный коллаген / костный бульон`,
        },
        latin: `Hydrolyzed Collagen`,
        icon: `sparkle`,
        dose: {
          he: `10–15 גרם/יום`,
          en: `10–15 g/day`,
          ru: `10–15 г/день`,
        },
        body: {
          he: `גליצין ופרולין כחומרי גלם לעור ולרירית המעי. נוח לשילוב במשקה.`,
          en: `Glycine and proline as raw materials for the skin and gut mucosa. Convenient to mix into a drink.`,
          ru: `Глицин и пролин как сырьё для кожи и слизистой кишечника. Удобно добавлять в напиток.`,
        },
        tags: [
          ['ti', { he: `Tier C`, en: `Tier C`, ru: `Tier C` }],
          ['sk', { he: `עור/מעי`, en: `Skin/gut`, ru: `Кожа/кишечник` }],
        ],
        kw: `hydrolyzed collagen peptides`,
      },
    ],
  },
  {
    group: {
      he: `קורטיזול ואדפטוגנים`,
      en: `Cortisol and adaptogens`,
      ru: `Кортизол и адаптогены`,
    },
    icon: 'leaf',
    intro: {
      he: `קודם 4 שבועות של בסיס אורח-חיים (שינה, נשימה, אור בוקר) — זו העבודה הכבדה. אדפטוגנים רק אחר כך. הערה: אשווגנדה וליקוריץ הושמטו כאן בכוונה — הם מופיעים ברשימת ההימנעות (מגרי-חיסון).`,
      en: `First 4 weeks of a lifestyle foundation (sleep, breathing, morning light) — that is the heavy lifting. Adaptogens only afterward. Note: ashwagandha and licorice were intentionally omitted here — they appear on the avoidance list (immune stimulants).`,
      ru: `Сначала 4 недели основы образа жизни (сон, дыхание, утренний свет) — это основная работа. Адаптогены — только после. Примечание: ашваганда и солодка намеренно исключены здесь — они входят в список средств, которых следует избегать (иммуностимуляторы).`,
    },
    items: [
      {
        name: {
          he: `רודיולה`,
          en: `Rhodiola`,
          ru: `Родиола`,
        },
        latin: `Rhodiola Rosea`,
        icon: `leaf`,
        dose: {
          he: `300–600 מ"ג/יום · בבוקר`,
          en: `300–600 mg/day · in the morning`,
          ru: `300–600 мг/день · утром`,
        },
        body: {
          he: `לעייפות ולקורטיזול שטוח/נמוך. יכול להיות מעורר — ליטול מוקדם ביום. אם הקורטיזול שטוח, כדאי בירור רפואי.`,
          en: `For fatigue and a flat/low cortisol curve. Can be stimulating — take it early in the day. If cortisol is flat, a medical workup is advisable.`,
          ru: `При усталости и плоском/низком уровне кортизола. Может оказывать стимулирующее действие — принимать в начале дня. При плоском кортизоле целесообразно медицинское обследование.`,
        },
        tags: [
          ['ti', { he: `Tier C`, en: `Tier C`, ru: `Tier C` }],
          ['ev', { he: `עייפות`, en: `Fatigue`, ru: `Усталость` }],
          ['ca', { he: `מעורר · בוקר`, en: `Stimulating · morning`, ru: `Стимулирующее · утром` }],
        ],
        kw: `rhodiola rosea 500`,
      },
      {
        name: {
          he: `פוספטידילסרין`,
          en: `Phosphatidylserine`,
          ru: `Фосфатидилсерин`,
        },
        latin: `Phosphatidylserine`,
        icon: `capsule`,
        dose: {
          he: `100–300 מ"ג/יום (בערב)`,
          en: `100–300 mg/day (in the evening)`,
          ru: `100–300 мг/день (вечером)`,
        },
        body: {
          he: `ממתן זינוקי קורטיזול בערב ותומך ברגיעה ובשינה.`,
          en: `Tempers evening cortisol spikes and supports relaxation and sleep.`,
          ru: `Смягчает вечерние всплески кортизола и поддерживает расслабление и сон.`,
        },
        tags: [
          ['ti', { he: `Tier C`, en: `Tier C`, ru: `Tier C` }],
          ['sk', { he: `קורטיזול ערב`, en: `Evening cortisol`, ru: `Вечерний кортизол` }],
        ],
        kw: `phosphatidylserine 100`,
      },
      {
        name: {
          he: `L-תאנין`,
          en: `L-theanine`,
          ru: `L-теанин`,
        },
        latin: `L-Theanine`,
        icon: `leaf`,
        dose: {
          he: `100–200 מ"ג/יום`,
          en: `100–200 mg/day`,
          ru: `100–200 мг/день`,
        },
        body: {
          he: `רוגע בלי טשטוש; משתלב יפה עם מדיטציה וממתן את הקפאין של הבוקר.`,
          en: `Calm without grogginess; pairs well with meditation and tempers the morning caffeine.`,
          ru: `Спокойствие без затуманенности; хорошо сочетается с медитацией и смягчает утренний кофеин.`,
        },
        tags: [
          ['ti', { he: `Tier C`, en: `Tier C`, ru: `Tier C` }],
          ['sk', { he: `רוגע`, en: `Calm`, ru: `Спокойствие` }],
        ],
        kw: `l-theanine 200`,
      },
      {
        name: {
          he: `B-קומפלקס (בעיקר B5)`,
          en: `B-complex (mainly B5)`,
          ru: `B-комплекс (в основном B5)`,
        },
        latin: `B-Complex / B5`,
        icon: `capsule`,
        dose: {
          he: `מינון סטנדרטי`,
          en: `Standard dose`,
          ru: `Стандартная доза`,
        },
        body: {
          he: `קו-פקטורים לתמיכה בציר האדרנל; חומצה פנטותנית (B5) במיוחד.`,
          en: `Cofactors to support the adrenal axis; pantothenic acid (B5) in particular.`,
          ru: `Кофакторы для поддержки надпочечниковой оси; в особенности пантотеновая кислота (B5).`,
        },
        tags: [
          ['ti', { he: `Tier C`, en: `Tier C`, ru: `Tier C` }],
          ['ev', { he: `אדרנל`, en: `Adrenal`, ru: `Надпочечники` }],
        ],
        kw: `b complex b5 pantothenic acid`,
      },
    ],
  },
  {
    group: {
      he: `טיפוח עור מקומי צמחי`,
      en: `Topical botanical skincare`,
      ru: `Местный растительный уход за кожей`,
    },
    icon: 'sparkle',
    intro: {
      he: `למרוח על עור נקי, אחרי התרופה המקומית, פריט חדש אחד בכל פעם עם טסט רגישות. להימנע מאזורים פתוחים/מפרישים אלא באישור רופא/ה.`,
      en: `Apply to clean skin, after the topical medication, one new item at a time with a patch test. Avoid open/weeping areas unless approved by a physician.`,
      ru: `Наносить на чистую кожу, после местного лекарства, по одному новому средству за раз с тестом на чувствительность. Избегать открытых/мокнущих участков без разрешения врача.`,
    },
    items: [
      {
        name: {
          he: `סנטלה אסיאטית (Cica)`,
          en: `Centella asiatica (Cica)`,
          ru: `Центелла азиатская (Cica)`,
        },
        latin: `Centella Asiatica`,
        icon: `leaf`,
        dose: {
          he: `מקומי · קרם/סרום`,
          en: `Topical · cream/serum`,
          ru: `Местно · крем/сыворотка`,
        },
        body: {
          he: `הראיות הצמחיות החזקות ביותר לעור: מדקסוסיד/אסיאטיקוסיד מרגיעים דלקת ומעודדים קולגן ותיקון מחסום. הבחירה המובילה.`,
          en: `The strongest botanical evidence for skin: madecassoside/asiaticoside calm inflammation and promote collagen and barrier repair. The top pick.`,
          ru: `Самые сильные растительные доказательства для кожи: мадекассозид/азиатикозид успокаивают воспаление и стимулируют коллаген и восстановление барьера. Лучший выбор.`,
        },
        tags: [
          ['ti', { he: `בחירה מובילה`, en: `Top pick`, ru: `Лучший выбор` }],
          ['ev', { he: `ראיות חזקות`, en: `Strong evidence`, ru: `Сильные доказательства` }],
          ['sk', { he: `מחסום/קולגן`, en: `Barrier/collagen`, ru: `Барьер/коллаген` }],
        ],
        kw: `centella asiatica cica cream`,
      },
      {
        name: {
          he: `שיבולת שועל קולואידלית`,
          en: `Colloidal oatmeal`,
          ru: `Коллоидная овсянка`,
        },
        latin: `Colloidal Oatmeal`,
        icon: `drop`,
        dose: {
          he: `מקומי · קרם/אמבט`,
          en: `Topical · cream/bath`,
          ru: `Местно · крем/ванна`,
        },
        body: {
          he: `מרגיע גרד ודלקת, נחקר היטב וסיכון נמוך מאוד. מצוין להרגעה יומיומית.`,
          en: `Calms itch and inflammation, well studied and very low risk. Excellent for daily soothing.`,
          ru: `Успокаивает зуд и воспаление, хорошо изучена и очень низкого риска. Отлично подходит для ежедневного успокоения.`,
        },
        tags: [
          ['ti', { he: `Tier B`, en: `Tier B`, ru: `Tier B` }],
          ['ev', { he: `אנטי-גרד`, en: `Anti-itch`, ru: `Против зуда` }],
          ['sk', { he: `סיכון נמוך`, en: `Low risk`, ru: `Низкий риск` }],
        ],
        kw: `colloidal oatmeal cream eczema`,
      },
      {
        name: {
          he: `קלנדולה ובבונג`,
          en: `Calendula & chamomile`,
          ru: `Календула и ромашка`,
        },
        latin: `Calendula & Chamomile`,
        icon: `sprout`,
        dose: {
          he: `מקומי`,
          en: `Topical`,
          ru: `Местно`,
        },
        body: {
          he: `קלנדולה ובבונג (ביסבולול) — מרגיעים עדינים לשכבת נוחות. ראיות מתונות.`,
          en: `Calendula and chamomile (bisabolol) — gentle soothers for a comfort layer. Moderate evidence.`,
          ru: `Календула и ромашка (бисаболол) — мягкие успокаивающие средства для комфортного слоя. Умеренные доказательства.`,
        },
        tags: [
          ['ti', { he: `Tier C`, en: `Tier C`, ru: `Tier C` }],
          ['sk', { he: `מרגיע עדין`, en: `Gentle soother`, ru: `Мягкое успокаивающее` }],
        ],
        kw: `calendula chamomile balm fragrance free`,
      },
      {
        name: {
          he: `ניאצינמיד 4–5%`,
          en: `Niacinamide 4–5%`,
          ru: `Ниацинамид 4–5%`,
        },
        latin: `Niacinamide`,
        icon: `sparkle`,
        dose: {
          he: `מקומי · סרום`,
          en: `Topical · serum`,
          ru: `Местно · сыворотка`,
        },
        body: {
          he: `מחזק מחסום, מרגיע ומבהיר פיגמנטציה לאחר דלקת. משתלב עם סרמיד וחומצה היאלורונית.`,
          en: `Strengthens the barrier, soothes, and lightens post-inflammatory pigmentation. Combines with ceramide and hyaluronic acid.`,
          ru: `Укрепляет барьер, успокаивает и осветляет поствоспалительную пигментацию. Сочетается с церамидами и гиалуроновой кислотой.`,
        },
        tags: [
          ['ti', { he: `ליבה`, en: `Core`, ru: `Основа` }],
          ['ev', { he: `מבוסס`, en: `Established`, ru: `Подтверждённое` }],
          ['sk', { he: `מחסום`, en: `Barrier`, ru: `Барьер` }],
        ],
        kw: `niacinamide serum 5%`,
      },
      {
        name: {
          he: `חומצה אזלאית 15–20%`,
          en: `Azelaic acid 15–20%`,
          ru: `Азелаиновая кислота 15–20%`,
        },
        latin: `Azelaic Acid`,
        icon: `sparkle`,
        dose: {
          he: `מקומי · להכניס לאט`,
          en: `Topical · introduce slowly`,
          ru: `Местно · вводить постепенно`,
        },
        body: {
          he: `לפיגמנטציה שלאחר דלקת (PIH). להכניס בהדרגה — עלולה לצרוב מעט בתחילה.`,
          en: `For post-inflammatory hyperpigmentation (PIH). Introduce gradually — it may sting a little at first.`,
          ru: `Для поствоспалительной гиперпигментации (PIH). Вводить постепенно — поначалу может слегка пощипывать.`,
        },
        tags: [
          ['ti', { he: `PIH`, en: `PIH`, ru: `PIH` }],
          ['sk', { he: `פיגמנטציה`, en: `Pigmentation`, ru: `Пигментация` }],
          ['ca', { he: `להכניס לאט`, en: `Introduce slowly`, ru: `Вводить постепенно` }],
        ],
        kw: `azelaic acid 15 20 serum`,
      },
      {
        name: {
          he: `שמני צמח אמולנטיים`,
          en: `Emollient plant oils`,
          ru: `Смягчающие растительные масла`,
        },
        latin: `Jojoba · Squalane · Rosehip`,
        icon: `drop`,
        dose: {
          he: `מקומי · אמולנט`,
          en: `Topical · emollient`,
          ru: `Местно · смягчающее`,
        },
        body: {
          he: `ג'וג'ובה, סקוואלן, רוזהיפ, טמאנו — לחות ותמיכת מחסום. נוחות בלבד, לא משנים-מחלה.`,
          en: `Jojoba, squalane, rosehip, tamanu — hydration and barrier support. Comfort only, not disease-modifying.`,
          ru: `Жожоба, сквалан, шиповник, таману — увлажнение и поддержка барьера. Только для комфорта, не влияют на течение болезни.`,
        },
        tags: [
          ['ti', { he: `Tier C`, en: `Tier C`, ru: `Tier C` }],
          ['sk', { he: `אמולנט/לחות`, en: `Emollient/hydration`, ru: `Смягчение/увлажнение` }],
        ],
        kw: `squalane jojoba rosehip oil fragrance free`,
      },
      {
        name: {
          he: `אלוורה (ג'ל שקוף)`,
          en: `Aloe vera (clear gel)`,
          ru: `Алоэ вера (прозрачный гель)`,
        },
        latin: `Aloe Vera (inner gel)`,
        icon: `leaf`,
        dose: {
          he: `מקומי · ג'ל פנימי בלבד`,
          en: `Topical · inner gel only`,
          ru: `Местно · только внутренний гель`,
        },
        body: {
          he: `קירור והרגעה עדינים, כמו קומפרס קר. רק הג'ל השקוף הפנימי — לא הלטקס הצהוב המגרה.`,
          en: `Gentle cooling and soothing, like a cold compress. Only the clear inner gel — not the irritating yellow latex.`,
          ru: `Мягкое охлаждение и успокоение, как холодный компресс. Только прозрачный внутренний гель — не раздражающий жёлтый латекс.`,
        },
        tags: [
          ['ti', { he: `Tier C`, en: `Tier C`, ru: `Tier C` }],
          ['sk', { he: `הרגעה/קירור`, en: `Soothing/cooling`, ru: `Успокоение/охлаждение` }],
          ['ca', { he: `גל שקוף בלבד`, en: `Clear gel only`, ru: `Только прозрачный гель` }],
        ],
        kw: `aloe vera gel pure`,
      },
    ],
  },
]
// ===== תוספים שכדאי להימנע מהם / זהירות (בטיחות!) =====
export const AVOID = [
  { name: { he: `אכינצאה (Echinacea)`, en: `Echinacea`, ru: `Эхинацея` },
    why: { he: `"מחזק חיסון" קלאסי — מגרה את המערכת שכבר תוקפת בטעות, ועלול לעורר התפרצות. באירופה נושא אזהרה למחלות אוטואימוניות.`,
      en: `A classic "immune booster" — it stimulates a system that is already mistakenly attacking, and may trigger a flare. In Europe it carries a warning for autoimmune diseases.`,
      ru: `Классический "иммуностимулятор" — стимулирует систему, которая и так ошибочно атакует, и может спровоцировать обострение. В Европе имеет предупреждение при аутоиммунных заболеваниях.` } },
  { name: { he: `אספסת / נבטי אלפלפא (Alfalfa)`, en: `Alfalfa / alfalfa sprouts`, ru: `Люцерна / ростки люцерны` },
    why: { he: `מכילה L-canavanine שמגרה חיסון ונקשרה לתסמונת דמוית-זאבת ולהתלקחויות. להימנע לחלוטין.`,
      en: `Contains L-canavanine, which stimulates the immune system and has been linked to a lupus-like syndrome and to flares. Avoid completely.`,
      ru: `Содержит L-канаванин, который стимулирует иммунитет и связан с волчаночноподобным синдромом и обострениями. Полностью избегать.` } },
  { name: { he: `ספירולינה וכלורלה`, en: `Spirulina and chlorella`, ru: `Спирулина и хлорелла` },
    why: { he: `אצות "מחזקות חיסון" — בין התוספים שזוהו כמעלים סיכון להתלקחות עורית באוטואימוניות.`,
      en: `"Immune-boosting" algae — among the supplements identified as raising the risk of a cutaneous flare in autoimmunity.`,
      ru: `"Иммуностимулирующие" водоросли — среди добавок, которые повышают риск кожного обострения при аутоиммунных заболеваниях.` } },
  { name: { he: `אשווגנדה ואסטרגלוס`, en: `Ashwagandha and astragalus`, ru: `Ашваганда и астрагал` },
    why: { he: `צמחים אדפטוגניים מגרי-חיסון; מופיעים ברשימת הצמחים עם הראיות החזקות להחמרת מחלות עור אוטואימוניות.`,
      en: `Immune-stimulating adaptogenic herbs; they appear on the list of herbs with the strongest evidence for worsening autoimmune skin disease.`,
      ru: `Иммуностимулирующие адаптогенные растения; входят в список трав с наиболее сильными доказательствами ухудшения аутоиммунных кожных заболеваний.` } },
  { name: { he: `שום במינון תוספי גבוה`, en: `Garlic in high supplemental doses`, ru: `Чеснок в высоких дозах (добавки)` },
    why: { he: `אימונוסטימולנט; כתבלין במזון בדרך כלל בסדר, אך כמוסות מרוכזות עלולות לעורר.`,
      en: `An immunostimulant; as a culinary spice it is usually fine, but concentrated capsules may provoke a flare.`,
      ru: `Иммуностимулятор; как приправа в пище обычно безопасен, но концентрированные капсулы могут спровоцировать обострение.` } },
  { name: { he: `תמצית תה-ירוק במינון גבוה`, en: `High-dose green tea extract`, ru: `Экстракт зелёного чая в высокой дозе` },
    why: { he: `כמשקה מתון — לרוב בסדר; אך תמציות מרוכזות נקשרו לעומס על הכבד ולגירוי חיסוני.`,
      en: `As a moderate beverage it is usually fine; but concentrated extracts have been linked to liver strain and immune stimulation.`,
      ru: `Как умеренный напиток обычно безопасен; но концентрированные экстракты связывают с нагрузкой на печень и иммунной стимуляцией.` } },
  { name: { he: `ג'ינסנג, ליקוריץ, פטריות ריישי, מיסלטו, סקאלקאפ`, en: `Ginseng, licorice, reishi mushroom, mistletoe, skullcap`, ru: `Женьшень, солодка, гриб рейши, омела, шлемник` },
    why: { he: `כולם ברשימת ה-15 צמחים מגרי-החיסון שזוהו כמעלים סיכון להתלקחות עור בזאבת. להתייעץ לפני כל "תוסף חיסון".`,
      en: `All are on the list of 15 immune-stimulating herbs identified as raising the risk of a skin flare in lupus. Consult before any "immune supplement."`,
      ru: `Все входят в список из 15 иммуностимулирующих трав, повышающих риск кожного обострения при волчанке. Консультируйтесь перед любой "добавкой для иммунитета".` } },
]

// ===== קטו: בעד/נגד =====
export const KETO_PRO = [
  { he: `קטונים (BHB) מעכבים את ה-NLRP3 inflammasome ומפחיתים דלקת במודלים`, en: `Ketones (BHB) inhibit the NLRP3 inflammasome and reduce inflammation in models`, ru: `Кетоны (BHB) ингибируют инфламмасому NLRP3 и снижают воспаление в моделях` },
  { he: `מורידה סוכר ואינסולין — פחות "להבת דלקת" ותוצרי גליקציה`, en: `Lowers blood sugar and insulin — less "inflammatory flame" and fewer glycation products`, ru: `Снижает сахар в крови и инсулин — меньше "пламени воспаления" и продуктов гликации` },
  { he: `דיווחים אנקדוטליים על שיפור בעייפות, כאבי מפרקים ורשת העור`, en: `Anecdotal reports of improvement in fatigue, joint pain, and the skin rash`, ru: `Единичные сообщения об улучшении усталости, боли в суставах и кожных проявлений` },
  { he: `עדויות מוקדמות מעודדות במחלות דלקתיות קרובות (דלקת מפרקים פסוריאטית)`, en: `Encouraging early evidence in related inflammatory diseases (psoriatic arthritis)`, ru: `Обнадёживающие предварительные данные при близких воспалительных заболеваниях (псориатический артрит)` },
]
export const KETO_CON = [
  { he: `הראיות בזאבת עדיין דלות, קטנות וברובן אנקדוטליות`, en: `The evidence in lupus is still scarce, small, and mostly anecdotal`, ru: `Доказательства при волчанке всё ещё скудны, малочисленны и в основном единичны` },
  { he: `דלה בסיבים → עלולה לפגוע במיקרוביום ובמחסום המעי`, en: `Low in fiber → may harm the microbiome and the gut barrier`, ru: `Бедна клетчаткой → может навредить микробиому и кишечному барьеру` },
  { he: `עלולה להעלות LDL ולהכביד על סיכון לב-וכלי-דם (כבר מוגבר בזאבת)`, en: `May raise LDL and add to cardiovascular risk (already elevated in lupus)`, ru: `Может повысить ЛПНП и усилить сердечно-сосудистый риск (уже повышен при волчанке)` },
  { he: `קשה לקיימוּת לאורך זמן; דורשת מעקב רופא ובדיקות שומנים`, en: `Hard to sustain long-term; requires physician monitoring and lipid testing`, ru: `Трудно поддерживать долго; требует наблюдения врача и анализа липидов` },
]

// ===== מקורות (כתובות זהות בכל השפות) =====
export const SOURCES = [
  ['Lupus Foundation — Vitamin D & Fish Oil', 'https://www.lupus.org/news/vitamin-d-and-fish-oil-supplements-for-prevention-of-autoimmune-diseases-like-lupus'],
  ['Lupus Foundation — 15 immune-activating herbs to avoid', 'https://www.lupus.org/news/new-study-identifies-15-herbal-supplements-to-potential-skin-flare-activity-in-people-with'],
  ['Diet & SLE: From Supplementation to Intervention (NIH)', 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9565311/'],
  ['Curcumin RCT in SLE (PubMed)', 'https://pubmed.ncbi.nlm.nih.gov/39546036/'],
  ['Sea buckthorn in skin & mucosal health (NIH review)', 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12644098/'],
  ['Ketogenic diet & autoimmune conditions', 'https://www.medicalnewstoday.com/articles/in-conversation-is-the-ketogenic-diet-right-for-autoimmune-conditions'],
  ['Johns Hopkins Lupus — foods/meds to avoid', 'https://www.hopkinslupus.org/lupus-info/lifestyle-additional-information/avoid/'],
]

// ===== מחרוזות ממשק (UI) =====
export const UI = {
  langName: { he: `עברית`, en: `English`, ru: `Русский` },
  brandMain: { he: `תוכנית`, en: `Skin`, ru: `Кожа` },
  brandAccent: { he: `·עור`, en: `·Plan`, ru: `·План` },
  headerPill: { he: `12 שבועות`, en: `12 weeks`, ru: `12 недель` },

  eyebrow: { he: `תוכנית תומכת · DLE · זאבת עורית`, en: `Supportive program · DLE · Cutaneous lupus`, ru: `Поддерживающая программа · DLE · Кожная волчанка` },
  heroL1: { he: `12 שבועות`, en: `12 weeks`, ru: `12 недель` },
  heroL2: { he: `לעור`, en: `for skin`, ru: `для кожи` },
  heroL3: { he: `רגוע יותר`, en: `that's calmer`, ru: `спокойнее` },
  lead: { he: `תוכנית מעשית שמלווה את הטיפול הרפואי בזאבת עורית — הגנה מהשמש, תזונה אנטי-דלקתית, פירות יער (אובלפיחה, חמוציות), ותוספים מבוססי-ראיות. כל שבוע מסביר לעומק מדוע, ולא רק מה.`,
    en: `A practical program that supports the medical treatment of cutaneous lupus — sun protection, anti-inflammatory nutrition, berries (sea buckthorn, cranberry), and evidence-based supplements. Each week explains in depth why, not just what.`,
    ru: `Практическая программа, сопровождающая медицинское лечение кожной волчанки — защита от солнца, противовоспалительное питание, ягоды (облепиха, клюква) и добавки с доказанной эффективностью. Каждая неделя подробно объясняет почему, а не только что.` },
  ctaPrimary: { he: `לתוכנית המלאה ↓`, en: `See the full program ↓`, ru: `К полной программе ↓` },
  ctaGhost: { he: `בטיחות תוספים`, en: `Supplement safety`, ru: `Безопасность добавок` },
  statWeeks: { he: `שבועות מובנים`, en: `structured weeks`, ru: `структурированных недель` },
  statPhases: { he: `שלבים מצטברים`, en: `cumulative phases`, ru: `накопительных этапа` },
  statItems: { he: `פריטים + קישורי קנייה`, en: `items + buy links`, ru: `позиций + ссылки на покупку` },

  weekWord: { he: `שבוע`, en: `week`, ru: `неделя` },
  whyLabel: { he: `מדוע זה חשוב — לעומק:`, en: `Why it matters — in depth:`, ru: `Почему это важно — подробно:` },
  tasksLabel: { he: `משימות השבוע`, en: `Tasks for the week`, ru: `Задачи недели` },

  tagJourney: { he: `המסע`, en: `The journey`, ru: `Путь` },
  titleWeeksA: { he: `תוכנית `, en: `The `, ru: `Программа ` },
  titleWeeksEm: { he: `12 השבועות`, en: `12-week`, ru: `на 12 недель` },
  titleWeeksB: { he: ``, en: ` plan`, ru: `` },
  subWeeks: { he: `ארבעה שלבים שנבנים זה על זה — לוחצים על כל שבוע כדי לפתוח את ההסבר המעמיק ואת המשימות.`,
    en: `Four phases that build on one another — tap each week to open its in-depth explanation and tasks.`,
    ru: `Четыре этапа, которые опираются друг на друга — нажмите на каждую неделю, чтобы открыть подробное объяснение и задачи.` },

  tagBerries: { he: `פירות יער`, en: `Berries`, ru: `Ягоды` },
  titleBerriesA: { he: `פירות `, en: `Antioxidant `, ru: `Ягоды-` },
  titleBerriesEm: { he: `היער`, en: `berries`, ru: `антиоксиданты` },
  titleBerriesB: { he: ` — נוגדי חמצון`, en: ``, ru: `` },
  subBerries: { he: `סטרס חמצוני מלבה את הנגעים אחרי חשיפת UV. פירות יער הם מהמקורות המרוכזים ביותר של אנתוציאנינים ופוליפנולים — והם נוגדי-חמצון, לא "מגרי-חיסון", ולכן בטוחים ומועילים בזאבת.`,
    en: `Oxidative stress inflames the lesions after UV exposure. Berries are among the most concentrated sources of anthocyanins and polyphenols — they are antioxidants, not "immune stimulants," so they are safe and beneficial in lupus.`,
    ru: `Окислительный стресс воспаляет очаги после воздействия УФ. Ягоды — один из самых концентрированных источников антоцианов и полифенолов: это антиоксиданты, а не "иммуностимуляторы", поэтому они безопасны и полезны при волчанке.` },

  tagSupps: { he: `תוספים`, en: `Supplements`, ru: `Добавки` },
  titleSuppsA: { he: `תוספים `, en: `Evidence-based `, ru: `Добавки с ` },
  titleSuppsEm: { he: `מבוססי-ראיות`, en: `supplements`, ru: `доказанной пользой` },
  titleSuppsB: { he: ``, en: ``, ru: `` },
  subSupps: { he: `תוספים עם בסיס מחקרי בזאבת/עור — כולם "מרגיעי" או "מאזני" חיסון, ולא "מחזקי חיסון". כל כרטיס כולל קישור חיפוש ל-iHerb ול-Amazon. המינונים להמחשה — את המינון בפועל קובע/ת רופא/ה.`,
    en: `Supplements with a research basis in lupus/skin — all of them "calm" or "balance" the immune system rather than "boost" it. Each card includes an iHerb and Amazon search link. Doses are illustrative — the actual dose is set by a physician.`,
    ru: `Добавки с научной базой при волчанке/коже — все они "успокаивают" или "балансируют" иммунитет, а не "усиливают" его. На каждой карточке есть ссылка на поиск в iHerb и Amazon. Дозы приведены для примера — фактическую дозу определяет врач.` },

  tagBiohack: { he: `ביוהאקינג`, en: `Biohacking`, ru: `Биохакинг` },
  titleBiohackA: { he: `ביוהאקינג — `, en: `Biohacking — `, ru: `Биохакинг — ` },
  titleBiohackEm: { he: `השכבה המתקדמת`, en: `the advanced layer`, ru: `продвинутый уровень` },
  titleBiohackB: { he: ``, en: ``, ru: `` },
  subBiohack: { he: `כל מה שלא נמצא בליבת התוכנית, מתוך מאגר הביוהאקינג. רוב הפריטים ברמת ראיות C (ניסיוני) — תוספות אופציונליות, לא עמודי-תווך. הוסיפי אחד-אחד, כמה ימים זה מזה, ובליווי רופא/ה.`,
    en: `Everything not in the core program, from the biohacking reference. Most items are evidence Tier C (experimental) — optional add-ons, not pillars. Add them one at a time, a few days apart, under medical supervision.`,
    ru: `Всё, чего нет в основной программе, из справочника по биохакингу. Большинство позиций — уровень доказательности C (экспериментальный): необязательные дополнения, а не опоры. Добавляйте по одному, с интервалом в несколько дней, под наблюдением врача.` },
  biohackDeepA: { he: `איך לקרוא:`, en: `How to read this:`, ru: `Как читать:` },
  biohackDeepBody: { he: ` Tier A = ראיות חזקות · Tier B = בינוני/מתפתח · Tier C = מנגנוני/קהילתי. סדר עדיפויות: קודם הליבה והבסיס הרפואי, אחר כך פריטי A/B, ולבסוף ניסויי C — לשמור את מה שעוזר ולגזום את השאר. פריטים "מגרי-חיסון" (אכינצאה, אשווגנדה, ליקוריץ, ספירולינה ועוד) אינם כאן — ראי `,
    en: ` Tier A = strong evidence · Tier B = moderate/emerging · Tier C = mechanistic/community. Priority order: first the core and the medical foundation, then Tier A/B items, and finally the Tier C experiments — keep what helps and prune the rest. "Immune-stimulating" items (echinacea, ashwagandha, licorice, spirulina and more) are not here — see `,
    ru: ` Tier A = сильные доказательства · Tier B = умеренные/развивающиеся · Tier C = механистические/сообщество. Порядок приоритетов: сначала основа и медицинский фундамент, затем позиции Tier A/B и в последнюю очередь эксперименты Tier C — оставляйте то, что помогает, и убирайте остальное. "Иммуностимулирующие" позиции (эхинацея, ашваганда, солодка, спирулина и др.) сюда не входят — см. ` },
  biohackDeepLink: { he: `בטיחות`, en: `Safety`, ru: `Безопасность` },

  tagDiet: { he: `תזונה`, en: `Nutrition`, ru: `Питание` },
  titleKetoA: { he: `דיאטת `, en: `The `, ru: `` },
  titleKetoEm: { he: `קטו`, en: `keto`, ru: `Кето-диета` },
  titleKetoB: { he: ` — האם כדאי?`, en: ` diet — is it worth it?`, ru: ` — стоит ли?` },
  subKeto: { he: `השאלה שביקשת לבדוק. התשובה הכנה: יש היגיון מנגנוני ועדויות מוקדמות, אבל הראיות בזאבת עדיין דלות וקיימים סיכונים אמיתיים. הגישה האחראית — גליקמי-נמוך כברירת מחדל, וקטו רק כניסוי מבוקר וקצוב בזמן תחת מעקב.`,
    en: `The question you asked us to check. The honest answer: there is mechanistic logic and early evidence, but the evidence in lupus is still scarce and there are real risks. The responsible approach — low-glycemic by default, and keto only as a controlled, time-limited experiment under supervision.`,
    ru: `Вопрос, который вы просили проверить. Честный ответ: есть механистическая логика и ранние данные, но доказательств при волчанке всё ещё мало, и есть реальные риски. Ответственный подход — низкогликемическое питание по умолчанию, а кето — только как контролируемый, ограниченный по времени эксперимент под наблюдением.` },
  ketoProH: { he: `✓ בעד / היגיון`, en: `✓ For / rationale`, ru: `✓ За / обоснование` },
  ketoConH: { he: `✕ זהירות / נגד`, en: `✕ Caution / against`, ru: `✕ Осторожно / против` },
  ketoBottomA: { he: `השורה התחתונה:`, en: `Bottom line:`, ru: `Итог:` },
  ketoBottomBody: { he: ` התחילי בתזונה ים-תיכונית גליקמית-נמוכה (שבועות 5–9). אם רוצים לנסות קטו — כניסוי של 4–6 שבועות בלבד, עם שפע ירקות לא-עמילניים (לשמירת סיבים), שומנים בריאים, ובדיקת פרופיל שומנים לפני ואחרי, בליווי רופא.`,
    en: ` Start with a low-glycemic Mediterranean diet (weeks 5–9). If you want to try keto — only as a 4–6 week experiment, with plenty of non-starchy vegetables (to keep fiber), healthy fats, and a lipid panel before and after, under a physician's care.`,
    ru: ` Начните с низкогликемической средиземноморской диеты (недели 5–9). Если хотите попробовать кето — только как эксперимент на 4–6 недель, с обилием некрахмалистых овощей (чтобы сохранить клетчатку), полезными жирами и анализом липидного профиля до и после, под наблюдением врача.` },

  tagSafety: { he: `בטיחות`, en: `Safety`, ru: `Безопасность` },
  titleSafetyA: { he: `תוספים `, en: `Supplements `, ru: `Добавки, ` },
  titleSafetyEm: { he: `שכדאי להימנע`, en: `to avoid`, ru: `которых лучше избегать` },
  titleSafetyB: { he: ` מהם`, en: ``, ru: `` },
  subSafety: { he: `החלק הכי חשוב בעמוד הזה. בזאבת המערכת החיסונית כבר תוקפת בטעות — ולכן תוספים "מחזקי חיסון" עלולים להצית התלקחות. אלה תוספים פופולריים שמחקרים קשרו לסיכון מוגבר להתלקחות עור באוטואימוניות.`,
    en: `The most important part of this page. In lupus the immune system is already attacking by mistake — so "immune-boosting" supplements can ignite a flare. These are popular supplements that studies have linked to an increased risk of a skin flare in autoimmunity.`,
    ru: `Самая важная часть этой страницы. При волчанке иммунная система уже атакует по ошибке — поэтому "иммуностимулирующие" добавки могут вызвать обострение. Это популярные добавки, которые в исследованиях связывают с повышенным риском кожного обострения при аутоиммунных заболеваниях.` },
  avoidHeader: { he: `⚠ להימנע / להתייעץ לפני שימוש`, en: `⚠ Avoid / consult before use`, ru: `⚠ Избегать / проконсультироваться перед применением` },
  avoidSub: { he: `"מחזק חיסון" = בדיוק מה שלא רוצים כשהחיסון כבר היפר-פעיל. תמיד להתייעץ עם הרופא/ה לפני כל תוסף חדש.`,
    en: `"Immune booster" = exactly what you do not want when the immune system is already hyperactive. Always consult your physician before any new supplement.`,
    ru: `"Иммуностимулятор" = именно то, что не нужно, когда иммунитет уже гиперактивен. Всегда консультируйтесь с врачом перед любой новой добавкой.` },

  disclaimerH: { he: `⚠ חשוב לקרוא`, en: `⚠ Important to read`, ru: `⚠ Важно прочитать` },
  disclaimerBody: { he: `מסמך זה הוא חומר עזר חינוכי בלבד — אינו אבחנה, אינו מרשם ואינו תחליף לייעוץ רפואי. זאבת עורית (DLE) מאובחנת ומטופלת על ידי רופא/ה בלבד, לרוב לאחר ביופסיה ובדיקות דם. הגנת שמש, תזונה ותוספים הם שכבת תמיכה סביב הטיפול התרופתי (כמו הידרוקסיכלורוקין וטיפול מקומי) — לא במקומו. חלק מהתוספים מקיימים אינטראקציות עם תרופות או דורשים ניטור — יש להתייעץ עם רופא/ה ורוקח/ת לפני כל שינוי.`,
    en: `This document is educational reference material only — not a diagnosis, not a prescription, and not a substitute for medical advice. Cutaneous lupus (DLE) is diagnosed and treated by a physician only, usually after a biopsy and blood tests. Sun protection, nutrition, and supplements are a support layer around drug treatment (such as hydroxychloroquine and topical therapy) — not a replacement for it. Some supplements interact with medications or require monitoring — consult a physician and pharmacist before any change.`,
    ru: `Этот документ — только образовательный справочный материал, а не диагноз, не рецепт и не замена медицинской консультации. Кожная волчанка (DLE) диагностируется и лечится только врачом, обычно после биопсии и анализов крови. Защита от солнца, питание и добавки — это поддерживающий слой вокруг медикаментозного лечения (например, гидроксихлорохина и местной терапии), а не его замена. Некоторые добавки взаимодействуют с лекарствами или требуют контроля — проконсультируйтесь с врачом и фармацевтом перед любым изменением.` },
  sourcesLabel: { he: `מקורות:`, en: `Sources:`, ru: `Источники:` },

  footerTagline: { he: `הוכן כעזר אישי · להביא ולדון עם רופא/ת העור · אינו מהווה ייעוץ רפואי`,
    en: `Prepared as a personal aid · bring it and discuss with your dermatologist · not medical advice`,
    ru: `Подготовлено как личное пособие · возьмите и обсудите с дерматологом · не является медицинской консультацией` },
  footerCopy: { he: `חומר חינוכי להמחשה בלבד`, en: `Educational material for illustration only`, ru: `Образовательный материал только для иллюстрации` },

  tabHome: { he: `בית`, en: `Home`, ru: `Главная` },
  tabWeeks: { he: `שבועות`, en: `Weeks`, ru: `Недели` },
  tabBerries: { he: `פירות יער`, en: `Berries`, ru: `Ягоды` },
  tabSupps: { he: `תוספים`, en: `Supplements`, ru: `Добавки` },
  tabBiohack: { he: `ביוהאקינג`, en: `Biohacking`, ru: `Биохакинг` },
  tabSafety: { he: `בטיחות`, en: `Safety`, ru: `Безопасность` },
}
