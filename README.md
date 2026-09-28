# HP Diesel Service – Landing Page de Alta Conversão

Landing page profissional desenvolvida para a **HP Diesel Service** (Parauapebas - PA), focada em campanhas de tráfego pago (Google Ads e Meta Ads) para geração e conversão imediata de leads para o WhatsApp.

---

## 🚀 Características do Projeto

* **Design Anti-Template de IA:** Identidade visual minimalista e industrial em **azul profundo e amarelo diesel/amber**, inspirada em marcas de precisão mecânica pesada (Bosch, Caterpillar, Cummins).
* **Foco Total em Conversão de Anúncios:**
  * Chamada clara e objetiva para dor de negócio (redução do tempo de parada de caminhões e frotas).
  * Botão de WhatsApp flutuante permanente no Desktop.
  * **Barra fixa inferior para Mobile**, garantindo conversão com 1 toque em anúncios no smartphone.
  * Botão de ligação direta `(94) 99184-1829`.
* **Módulo Interativo de Triagem de Problemas:** Permite que o motorista ou frotista clique no problema do veículo (motor, injeção, câmbio, freios, socorro ou frota) e abra o WhatsApp com a mensagem personalizada pronta.
* **Cobertura dos 6 Serviços Especializados:**
  1. Retífica e Manutenção de Motor
  2. Injeção Eletrônica e Diagnóstico via Scanner
  3. Mecânica Geral e Transmissão (Câmbio, Embreagem e Diferencial)
  4. Sistema de Freios a Ar e Elétrica
  5. Revisão Preventiva e Frotas
  6. Atendimento Externo e Socorro Mecânico (Máquinas Agrícolas / Construção)
* **Informações Reais e Oficiais Integradas:**
  * Endereço físico: Av. G6, quadra 08 - lote 12 - Cidade Jardim, Parauapebas - PA, 68515-000.
  * Rota do Google Maps oficial.
  * Link direto para o Instagram `@hp.diesel.service`.
* **Performance Imbatível:** Construído em HTML5 Semântico, Tailwind CSS e Vanilla JavaScript, com carregamento abaixo de 1 segundo (nota máxima no índice de qualidade do Google Ads).

---

## 📂 Estrutura de Arquivos

```
Site HP Diesel/
├── images/          # Imagens ilustrativas dos serviços da oficina
├── index.html       # Estrutura completa da landing page e seções
├── styles.css       # Estilos customizados, identidade visual limpa e moderna
├── script.js        # Lógica de WhatsApp, triagem interativa, FAQ e tracking
└── README.md        # Documentação e guia de uso
```

---

## 🛠️ Como Testar Localmente

Você pode abrir o arquivo `index.html` diretamente no seu navegador, ou rodar um servidor local com qualquer uma das opções abaixo:

### Opção 1: Via Python
```bash
python3 -m http.server 8080
```
Depois, acesse no navegador: `http://localhost:8080`

### Opção 2: Via Node.js
```bash
npx serve .
```

---

## 🎯 Configuração de Anúncios (Google Ads & Meta Ads)

No arquivo `script.js`, já deixamos preparada a função de tracking:

```javascript
window.trackWhatsAppLead = function(serviceLabel) {
  // Dispara automaticamente para Google Ads se o gtag estiver instalado
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'generate_lead', {
      'event_category': 'WhatsApp',
      'event_label': serviceLabel,
      'value': 1.0
    });
  }
  // Dispara automaticamente para o Meta Pixel se o fbq estiver instalado
  if (typeof window.fbq === 'function') {
    window.fbq('track', 'Contact', { content_name: serviceLabel });
  }
};
```

Para ativar as métricas, basta colar a sua tag do **Google Tag Manager**, **Google Ads** ou **Meta Pixel** dentro do `<head>` no `index.html`.

---

## 🌐 Como Publicar na Web

O site é 100% estático e pode ser hospedado gratuitamente ou no seu servidor de preferência:
* **Vercel / Netlify / Cloudflare Pages:** Basta arrastar a pasta do projeto.
* **Hospedagem cPanel / Hostinger / Locaweb:** Fazer upload dos 3 arquivos para a pasta `public_html`.
