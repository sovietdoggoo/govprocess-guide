import { useState, useMemo } from 'react';
import { useLocation } from 'wouter';
import { Search, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { processes, categories } from '@/lib/processes';

export default function Home() {
  const [, navigate] = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProcesses = useMemo(() => {
    return processes.filter(process => {
      const matchesSearch = process.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           process.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = !selectedCategory || process.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const popularServices = processes.slice(0, 3);

  const handleProcessClick = (processId: string) => {
    navigate(`/process/${processId}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container py-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-primary">Government Process Guide</h1>
              <p className="text-sm text-muted-foreground mt-1">Simplifying public services, one step at a time</p>
            </div>
          </div>
          
          <div className="relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search for a process..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 py-2 text-base"
            />
          </div>
        </div>
      </header>

      <main className="container py-12">
        {!searchQuery && !selectedCategory && (
          <section className="mb-16">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-3">Pick a process, see exactly what to do</h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Get step-by-step guides, required documents, fees, official links, and common mistakes to avoid.
              </p>
            </div>
          </section>
        )}

        {!searchQuery && !selectedCategory && (
          <section className="mb-16">
            <h3 className="text-xl font-bold text-foreground mb-6">Browse by Category</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className="p-4 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all text-left"
                >
                  <div className="text-2xl mb-2">{category.icon}</div>
                  <p className="font-medium text-sm text-foreground">{category.name}</p>
                </button>
              ))}
            </div>
          </section>
        )}

        {!searchQuery && !selectedCategory && (
          <section className="mb-16">
            <h3 className="text-xl font-bold text-foreground mb-6">Popular Services</h3>
            <div className="space-y-4">
              {popularServices.map(process => (
                <div
                  key={process.id}
                  onClick={() => handleProcessClick(process.id)}
                  className="p-6 rounded-lg border border-border bg-card hover:border-primary hover:shadow-md transition-all cursor-pointer"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-foreground mb-2">{process.name}</h4>
                      <p className="text-muted-foreground">{process.description}</p>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground ml-4 flex-shrink-0" />
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {(searchQuery || selectedCategory) && (
          <section>
            <div className="mb-8">
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory(null as any);
                }}
                className="text-primary hover:underline text-sm font-medium mb-4"
              >
                Clear filters
              </button>
              <h2 className="text-2xl font-bold text-foreground">
                {searchQuery ? `Search: ${searchQuery}` : `${categories.find(c => c.id === selectedCategory)?.name}`}
              </h2>
              <p className="text-muted-foreground mt-2">{filteredProcesses.length} results</p>
            </div>

            {filteredProcesses.length > 0 ? (
              <div className="space-y-4">
                {filteredProcesses.map(process => (
                  <div
                    key={process.id}
                    onClick={() => handleProcessClick(process.id)}
                    className="p-6 rounded-lg border border-border bg-card hover:border-primary hover:shadow-md transition-all cursor-pointer"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-foreground mb-2">{process.name}</h3>
                        <p className="text-muted-foreground mb-3">{process.description}</p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>Documents: {process.documents_required.length}</span>
                          <span>Time: {process.processing_time}</span>
                        </div>
                      </div>
                      <ChevronRight className="h-5 w-5 text-muted-foreground ml-4 flex-shrink-0" />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-8 rounded-lg border border-border bg-muted/30 text-center">
                <p className="text-muted-foreground mb-4">No processes found.</p>
                <Button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory(null);
                  }}
                  variant="outline"
                >
                  View all processes
                </Button>
              </div>
            )}
          </section>
        )}
      </main>

      <footer className="border-t border-border bg-muted/30 mt-16">
        <div className="container py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-foreground mb-3">About</h4>
              <p className="text-sm text-muted-foreground">Simplifies confusing public-service processes into clear, actionable steps.</p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-3">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="text-primary hover:underline">Home</a></li>
                <li><a href="/faq" className="text-primary hover:underline">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-3">Official Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="https://www.passportindia.gov.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Passport</a></li>
                <li><a href="https://www.nsdl.co.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">PAN</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-6 text-center text-sm text-muted-foreground">
            <p>Government Process Guide. Based on official government sources.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
