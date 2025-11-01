
function deepEquals(obj1, obj2) {
    const stack1 = [obj1];
    const stack2 = [obj2];
    
    while (stack1.length > 0) {
      const a = stack1.pop();
      const b = stack2.pop();
      
      if (a === b) continue;
      
      if (a == null || b == null) {
        if (a !== b) return false;
        continue;
      }
      
      if (typeof a !== 'object' || typeof b !== 'object') {
        if (a !== b) return false;
        continue;
      }
      
      const isArrayA = Array.isArray(a);
      const isArrayB = Array.isArray(b);
      
      if (isArrayA !== isArrayB) return false;
      
      if (isArrayA) {
        if (a.length !== b.length) return false;
        for (let i = a.length - 1; i >= 0; i--) {
          stack1.push(a[i]);
          stack2.push(b[i]);
        }
      } else {
        const keysA = Object.keys(a);
        const keysB = Object.keys(b);
        
        if (keysA.length !== keysB.length) return false;
        
        for (let key of keysA) {
          if (!(key in b)) return false;
        }
        
    
        for (let i = keysA.length - 1; i >= 0; i--) {
          const key = keysA[i];
          stack1.push(a[key]);
          stack2.push(b[key]);
        }
      }
    }
    
    return true;
  }