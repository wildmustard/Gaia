package wildmustard.gaia;

import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentManager;
import android.support.v4.app.FragmentPagerAdapter;

/**
 * Created by John on 10/24/2015.
 */
public class PagerAdapter extends FragmentPagerAdapter {

    public PagerAdapter(FragmentManager fm) {
        super(fm);
    }


    public Fragment getItem(int arg0){
        switch (arg0) {
            case 0:
                return new Gaia_Home_ActivityFragment();
            case 1:
                return new FragmentTwo();
            default:
                break;
        }
        return null;
    }

    public int getCount() {
        return 2;
    }
}
