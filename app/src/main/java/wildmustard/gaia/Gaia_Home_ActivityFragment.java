package wildmustard.gaia;

import android.app.Fragment;
import android.content.DialogInterface;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.os.Environment;
import android.widget.Button;
import java.io.File;
import android.net.Uri;
import android.content.Intent;
import android.provider.MediaStore;


/**
 * A placeholder fragment containing a simple view.
 */
public class Gaia_Home_ActivityFragment extends Fragment {

    public Gaia_Home_ActivityFragment() {
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        return inflater.inflate(R.layout.fragment_gaia__home_, container, false);
    }


}

