
const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-3xl font-bold font-space bg-main-gradient bg-clip-text text-transparent mb-4">
              ISKCON Updesh
            </h3>
            <p className="text-slate-400 max-w-md mx-auto">
              Spreading Krishna consciousness through eternal teachings and divine wisdom. 
              Hare Krishna, Hare Krishna, Krishna Krishna, Hare Hare.
            </p>
          </div>
          
          <div className="border-t border-slate-700 pt-8">
            <p className="text-slate-400">
              © 2024 ISKCON Updesh. All rights reserved. In service of Sri Krishna and His devotees.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
